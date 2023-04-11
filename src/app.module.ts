import { Module } from '@nestjs/common';
import { ExpeditionModule } from './modules/expedition/expedition.module';
import { UsersModule } from './modules/users/users.module';


@Module({
  imports: [UsersModule, ExpeditionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
