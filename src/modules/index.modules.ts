import { Module } from '@nestjs/common';
import { ExpeditionModule } from './expedition/expedition.module';
import { MailModule } from './mail/mail.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from 'src/main/config/db/database.module';

@Module({
  imports: [DatabaseModule, UsersModule, ExpeditionModule, MailModule],
})
export class IndexModule {}
