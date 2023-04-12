import { Module } from '@nestjs/common';
import { ExpeditionModule } from './expedition/expedition.module';
import { MailModule } from './mail/mail.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ExpeditionModule, MailModule],
})
export class IndexModule {}
