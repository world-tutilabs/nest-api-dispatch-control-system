import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SendEmailAlertDivergence {
  constructor(private readonly mailService: MailerService){}
  async execute({user}: ISendMailAlertDivergenceDTO) {
    await this.mailService.sendMail({
        to: "luan.santos@tutiplast.com.br",
        // from: 'No reply this email please' + process.env.EMAIL_MAIL,
        subject: 'Alerta de divergencia entre quantidade de atual e quantidade desejada em nota fiscal',
        template: 'sendEmailAlertDivergence',
        context: {
          name: user.name,
          matricula: user.matricula,
          locals: [
            {
                nome: 'Paulo',
                idade: 12
            },
            {
                nome: 'Jõao',
                idade: 15,
            },
            {
                nome: 'Marina',
                idade: 25,
            },
        ]
        },
        
      })
      .catch((error) => {
        console.log('ERROR SEND EMAIL WITH TOKEN: ' + error);
      });


  }

}