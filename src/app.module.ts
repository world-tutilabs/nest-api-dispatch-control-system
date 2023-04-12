import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ExpeditionModule } from './modules/expedition/expedition.module';
import { MailModule } from './modules/mail/mail.module';


@Module({
  imports: [UsersModule, ExpeditionModule, MailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
