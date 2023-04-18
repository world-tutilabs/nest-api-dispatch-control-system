import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { IndexModule } from './modules/index.modules';

@Module({
  imports: [
    IndexModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // MongooseModule.forRoot(
    //   'mongodb://127.0.0.1:58012/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1',
    // ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
