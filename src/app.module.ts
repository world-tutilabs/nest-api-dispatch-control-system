import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { IndexModule } from './modules/index.modules';
import { HttpModule } from '@nestjs/axios';

import { CacheModule } from '@nestjs/cache-manager';
import type { RedisClientOptions } from 'redis';
import { NotasFiscaisModule } from './modules/notas-fiscais/notas-fiscais.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    IndexModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // MongooseModule.forRoot(
    //   'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1',
    // ),
    HttpModule,
    NotasFiscaisModule,
    //* Redis Config
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      store: 'redisStore',
      socket: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT,
      },
      username: process.env.REDIS_USERNAME,
      password: process.env.REDIS_PASSWORD,
      ttl: +process.env.REDIS_TTL,
    }),
    //* Rate Limiter
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
