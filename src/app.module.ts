import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ExpeditionModule } from './modules/expedition/expedition.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [UsersModule, ExpeditionModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule { }
