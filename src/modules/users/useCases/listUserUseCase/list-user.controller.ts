import { Controller, Get } from '@nestjs/common';
import { ListUserService } from './list-user.service';
// import { SendEmailAlertDivergenceService } from 'src/modules/mail/services/sendEmailAlertDivergence.service';
import {
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../../entities/user.entity';

@ApiTags("Users")
@Controller('users')
export class ListUsersController {
  constructor(
    private readonly listUserService: ListUserService,
    // private readonly email: SendEmailAlertDivergenceService
    ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Listagem de Usuarios',
    type: User,
  })
  async handle() {
    return this.listUserService.execute();
  }

}