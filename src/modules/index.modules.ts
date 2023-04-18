import { Module } from '@nestjs/common';
import { ExpeditionModule } from './expedition/expedition.module';
import { MailModule } from './mail/mail.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from 'src/main/config/db/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, UsersModule, ExpeditionModule, MailModule, AuthModule],
})
export class IndexModule {}
