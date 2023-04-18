import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from "@nestjs/mongoose"
import { IndexModule } from './modules/index.modules';
import { LogsModule } from './modules/logs/logs.module';


@Module({
  imports: [
    IndexModule, 
    ConfigModule.forRoot({ isGlobal: true }), 
    MongooseModule.forRoot("mongodb://mongo_sce", {
      auth:{
        username: "root",
        password: "teste"
      },
      dbName: "logs_sce"
    }),
    LogsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
