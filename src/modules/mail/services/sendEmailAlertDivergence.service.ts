import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ISendMailAlertDivergenceDTO } from '../dto/ISendMailAlertDivergenceDTO';

@Injectable()
export class SendEmailAlertDivergenceService {
  constructor(private readonly mailService: MailerService) { }
  async execute(data: ISendMailAlertDivergenceDTO, user: any) {
    await this.mailService.sendMail({
      to: ["cd@tutiplast.com.br", "rogerio.repolho@tutiplast.com.br"],
      // from: 'No reply this email please' + process.env.EMAIL_MAIL,
      subject: "SCE - Sistema de Controle da Expedição",
      text: 'Alerta de divergencia entre quantidade de atual e quantidade desejada em nota fiscal',
      template: 'sendEmailAlertDivergence',
      context: {
        ...data, 
        user: {
          name: user.name
        }
      },

    })
      .catch((error) => {
        console.log('ERROR SEND EMAIL WITH TOKEN: ' + error);
      });


  }

}