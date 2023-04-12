import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IndexModule } from './modules/index.modules';


@Module({
  imports: [IndexModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule { }
