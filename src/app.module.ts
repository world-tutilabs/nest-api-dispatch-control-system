import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ExpeditionModule } from './modules/expedition/expedition.module';


@Module({
  imports: [UsersModule, ExpeditionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
