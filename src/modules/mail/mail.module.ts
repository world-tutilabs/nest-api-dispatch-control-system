import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import {  SendEmailAlertDivergenceService } from './services/sendEmailAlertDivergence.service';
import { SendEmailAlertDivergenceController } from './controller/sendEmailAlertDivergence.controller';
@Module({
    imports:[
        MailerModule.forRootAsync({
            useFactory: () => ({
                transport: {
                    host: process.env.EMAIL_HOST,
                    port: Number(process.env.EMAIL_PORT),
                    secure: false,
                    ignoreTLS: false,
                    auth: {
                      user:  process.env.EMAIL_MAIL,
                      pass:  process.env.PASSWORD_MAIL
                    },
                  },
                  // preview: true,
                  defaults: {
                    from:  process.env.EMAIL_MAIL,
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
    controllers:[
      SendEmailAlertDivergenceController
    ],
    providers:[
      SendEmailAlertDivergenceService
    ],
    exports:[
      SendEmailAlertDivergenceService
    ]
})
export class MailModule {}
