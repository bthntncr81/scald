import Order from '#models/order';
import type { HttpContext } from '@adonisjs/core/http';
import Paypal from '#services/payment/paypal';
import notification_service from '#services/notification_service';
import StripePayment from '#services/payment/stripe';
import PaymentMethod from '#models/payment_method';
import transmit from '@adonisjs/transmit/services/main';
import axios from 'axios';

export default class PaymentsController {
  private async getMethodConfig(key: string) {
    const methodConfig = await PaymentMethod.query().where('key', key).first();
    if (!methodConfig) {
      throw new Error('Payment method is not active. Please contact support');
    }
    return methodConfig;
  }

  public async capturePayPalOrder({ request, response, auth }: HttpContext) {
    const { token } = request.qs();
    try {
      const order = await Order.query()
        .whereRaw("JSON_EXTRACT(payment_info, '$.id') = ?", [token])
        .firstOrFail();

      const methodConfig = await this.getMethodConfig('paypal');

      const paypal = new Paypal(methodConfig);

      const pollPaymentStatus = async () => {
        for (let i = 0; i < 5; i++) {
          const capture = await paypal.capturePaypalPayment(token);
          if (capture.status === 'COMPLETED') {
            order
              .merge({
                paymentStatus: true,
                paymentInfo: JSON.stringify(capture.result),
                status: 'processing',
              })
              .save();

            await notification_service.sendNewOrderNotification(auth.user!, order);
            return true;
          }
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        return false;
      };

      const success = await pollPaymentStatus();

      if (!success) {
        await order.merge({ paymentStatus: false, status: 'failed' }).save();
        transmit.broadcast('orders', { success: true });
        return response.redirect('/user/my-orders?status=failed');
      }
      transmit.broadcast('orders', { success: true });
      return response.redirect('/confirm');
    } catch (error) {
      console.error('Error capturing PayPal order:', error);
      return response.redirect('/user/my-orders');
    }
  }

  public async cancelPaypalOrder({ request, response }: HttpContext) {
    const { token } = request.qs();
    try {
      const order = await Order.query()
        .whereRaw("JSON_EXTRACT(payment_info, '$.id') = ?", [token])
        .firstOrFail();
      if (order.status === 'completed' || order.paymentStatus === true) {
        return response.redirect('/user/my-orders');
      }
      await order.merge({ paymentStatus: false, status: 'failed' }).save();
      transmit.broadcast('orders', { success: true });
      return response.redirect('/user/my-orders?status=failed');
    } catch (error) {
      console.error('Error canceling paypal order:', error);
      return response.redirect('/user/my-orders');
    }
  }

  public async retrieveStripeSession({ request, response, auth }: HttpContext) {
    const { session_id: sessionId } = request.qs();
    try {
      const order = await Order.query()
        .whereRaw("JSON_EXTRACT(payment_info, '$.id') = ?", [sessionId])
        .firstOrFail();

      if (order.status === 'completed' || order.paymentStatus === true) {
        return response.redirect('/user/my-orders');
      }

      const methodConfig = await this.getMethodConfig('stripe');

      const stripe = new StripePayment(methodConfig);

      const pollPaymentStatus = async () => {
        for (let i = 0; i < 5; i++) {
          const session = await stripe.retrieveSession(sessionId);
          if (session.status === 'complete' && session.payment_status === 'paid') {
            order
              .merge({
                paymentStatus: true,
                paymentInfo: JSON.stringify(session),
                status: 'processing',
              })
              .save();

            await notification_service.sendNewOrderNotification(auth.user!, order);
            return true;
          }
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        return false;
      };

      const success = await pollPaymentStatus();

      if (!success) {
        await order.merge({ paymentStatus: false, status: 'failed' }).save();
        transmit.broadcast('orders', { success: true });
        return response.redirect('/user/my-orders');
      }
      transmit.broadcast('orders', { success: true });
      return response.redirect('/confirm');
    } catch (error) {
      return response.redirect('/user/my-orders');
    }
  }

  public async successIyzico({ request, response, auth }: HttpContext) {
    try {
      const orderId = request.param('orderId');

      const data = request.input('data');
      const token = request.input('paymentSessionToken');

      console.log('----------------------------------------------------------- ');
      console.log('----------------------------------------------------------- ');
      console.log('----------------------------------------------------------- ');

      console.log(data);

      console.log('----------------------------------------------------------- ');
      console.log('----------------------------------------------------------- ');
      console.log('----------------------------------------------------------- ');
      if (data.length > 0) {
        const paymentMethod = await PaymentMethod.query()
          .where('key', 'iyzico_ceppos')
          .andWhere('status', true)
          .firstOrFail();
        // paymentMethod üzerinden gerekli bilgileri alıyoruz
        const apiKey = paymentMethod.public; // Örneğin, API anahtarı
        const secretKey = paymentMethod!.secret; // Örneğin, gizli anahtar
        const merchantId = paymentMethod!.webhook; // Örneğin, merchant ID
        const resp = await axios.post(
          'https://sandbox-api.iyzipay.com/v2/in-store/crypt/decrypt',
          {
            data: data, // Ödenecek tutar
            paymentSessionToken: token,
          },
          {
            headers: {
              'x-api-key': apiKey,
              'x-secret-key': secretKey,
              'x-merchant-id': merchantId,
            },
          }
        );

        const order = await Order.query().where('id', orderId).firstOrFail();

        console.log('----------------------------------------------------------- ');
        console.log('----------------------------------------------------------- ');
        console.log('----------------------------------------------------------- ');

        console.log(resp.data);

        console.log('----------------------------------------------------------- ');
        console.log('----------------------------------------------------------- ');
        console.log('----------------------------------------------------------- ');
        if (
          resp.data.inStoreCompleteOperation &&
          !resp.data.inStoreCompleteOperation.paymentFailedResult
        ) {
          order
            .merge({
              paymentStatus: true,
              paymentInfo: JSON.stringify({}),
              status: 'processing',
            })
            .save();

          await notification_service.sendNewOrderNotification(auth.user!, order);

          transmit.broadcast('orders', { success: true });
          return response.redirect('/confirm');
        } else {
          console.log(resp.data.inStoreCompleteOperation.paymentFailedResult);
          order
            .merge({
              paymentStatus: false,
              paymentInfo: JSON.stringify({}),
              status: 'failed',
            })
            .save();

          await notification_service.sendNewOrderNotification(auth.user!, order);

          transmit.broadcast('orders', { success: true });
          return response.redirect('/user/my-orders?status=failed');
        }
      } else {
        const order = await Order.query().where('id', orderId).firstOrFail();

        order
          .merge({
            paymentStatus: true,
            paymentInfo: JSON.stringify({}),
            status: 'processing',
          })
          .save();

        await notification_service.sendNewOrderNotification(auth.user!, order);

        transmit.broadcast('orders', { success: true });
        return response.redirect('/confirm');
      }
    } catch (error) {
      return response.redirect('/user/my-orders');
    }
  }

  public async cancelIyzico({ request, response, auth }: HttpContext) {
    try {
      const orderId = request.param('orderId');

      const order = await Order.query().where('id', orderId).firstOrFail();

      order
        .merge({
          paymentStatus: false,
          paymentInfo: JSON.stringify({}),
          status: 'failed',
        })
        .save();

      await notification_service.sendNewOrderNotification(auth.user!, order);

      transmit.broadcast('orders', { success: true });
      return response.redirect('/user/my-orders?status=failed');
    } catch (error) {
      console.error('Error retrieving Iyzico session:', error);
      return response.redirect('/user/my-orders');
    }
  }

  public async cancelStripeSession({ request, response }: HttpContext) {
    const { session_id: sessionId } = request.qs();
    try {
      const order = await Order.query()
        .whereRaw("JSON_EXTRACT(payment_info, '$.id') = ?", [sessionId])
        .firstOrFail();

      if (order.status === 'completed' || order.paymentStatus === true) {
        return response.redirect('/user/my-orders');
      }

      const methodConfig = await this.getMethodConfig('stripe');

      const stripe = new StripePayment(methodConfig);
      const session = await stripe.expireSession(sessionId);
      if (session.status === 'expired' && session.payment_status === 'unpaid') {
        transmit.broadcast('orders', { success: true });
        await order.merge({ paymentStatus: false, status: 'failed' }).save();
      }
      transmit.broadcast('orders', { success: true });
      return response.redirect('/user/my-orders?status=failed');
    } catch (error) {
      console.error('Error retrieving Stripe session:', error);
      return response.redirect('/user/my-orders');
    }
  }
}
