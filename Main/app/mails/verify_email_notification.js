import env from '#start/env';
import { BaseMail } from '@adonisjs/mail';
export default class VerifyEmailNotification extends BaseMail {
    from = env.get('SMTP_USERNAME');
    subject = 'Verify Your Email';
    user;
    token;
    logo;
    url;
    appName;
    constructor(user, token, branding) {
        super();
        this.user = user;
        this.token = token;
        this.url = branding.siteUrl;
        this.appName = branding.business.name || '';
        this.logo = branding.siteUrl + branding?.business?.logo?.url || '';
    }
    prepare() {
        this.message.to(this.user.email);
        this.message.from(this.from, this.appName);
        this.message.subject(this.subject);
        this.message.htmlView('emails/generic_email', {
            logo: this.logo,
            title: this.subject,
            body: `<h1>Hello ${this.user?.firstName},</h1>
    <p>Please click the link below to verify your email address:</p>
    <p>Thanks.</p>`,
            action: true,
            actionText: 'Verify Now',
            actionUrl: this.url + '/verify-email?token=' + this.token,
        });
    }
}
//# sourceMappingURL=verify_email_notification.js.map