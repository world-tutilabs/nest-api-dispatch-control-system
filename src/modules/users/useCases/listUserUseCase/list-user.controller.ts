import { Controller, Get, UseGuards } from '@nestjs/common';
import { ListUserService } from './list-user.service';
// import { SendEmailAlertDivergenceService } from 'src/modules/mail/services/sendEmailAlertDivergence.service';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../../entities/user.entity';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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
