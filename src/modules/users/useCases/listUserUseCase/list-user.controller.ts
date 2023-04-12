import { Controller, Get } from '@nestjs/common';
import { ListUserService } from './list-user.service';
import { SendEmailAlertDivergence } from 'src/modules/mail/services/sendEmailAlertDivergence.service';

@Controller('users')
export class ListUsersController {
  constructor(
    private readonly listUserService: ListUserService,
    private readonly email: SendEmailAlertDivergence
    ) {}

  @Get()
  async handle() {
    await this.email.execute({
      user: {
        name: "luan",
        matricula: "5054"
      }
    })
    return this.listUserService.execute();
  }

}