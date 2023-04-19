import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { SendEmailAlertDivergence } from './services/sendEmailAlertDivergence.service';
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: process.env.EMAIL_HOST,
          port: Number(process.env.EMAIL_PORT),
          secure: false,
          ignoreTLS: false,
          auth: {
            user: process.env.EMAIL_MAIL,
            pass: process.env.PASSWORD_MAIL,
          },
        },
        // preview: true,
        defaults: {
          from: process.env.EMAIL_MAIL,
        },
        template: {
          dir: process.cwd() + '/src/modules/mail/templates',
          adapter: new EjsAdapter(),
          options: {
            strict: false,
          },
        },
      }),
    }),
  ],
  providers: [SendEmailAlertDivergence],
  exports: [SendEmailAlertDivergence],
})
export class MailModule {}
