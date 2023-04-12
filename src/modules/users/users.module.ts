import { Module } from '@nestjs/common';

import { CreateUsersController } from './useCases/createUserUseCase/create-user.controller';
import { CreateUserService } from './useCases/createUserUseCase/create-user.service';
import { ListUsersController } from './useCases/listUserUseCase/list-user.controller';
import { ListUserService } from './useCases/listUserUseCase/list-user.service';
import { MailModule } from '../mail/mail.module';

@Module({
  imports:[MailModule],
  controllers: [CreateUsersController, ListUsersController],
  providers: [CreateUserService, ListUserService]
})
export class UsersModule {}
