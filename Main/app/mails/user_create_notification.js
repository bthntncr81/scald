import env from '#start/env';
import { BaseMail } from '@adonisjs/mail';
export default class UserCreateNotification extends BaseMail {
    from = env.get('SMTP_USERNAME');
    subject = 'Your login password';
    user;
    logo;
    appName;
    password;
    constructor(user, password, branding) {
        super();
        this.user = user;
        this.appName = branding.business.name || '';
        this.password = password || '';
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
    <p>Your account has been created. Your generated password is: ${this.password}. You can use this password to login.</p>
    <p>Thanks.</p>`,
            action: false,
            actionText: '',
            actionUrl: '',
        });
    }
}
//# sourceMappingURL=user_create_notification.js.map