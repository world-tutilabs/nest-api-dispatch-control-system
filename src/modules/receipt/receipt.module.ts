import { Module } from '@nestjs/common';
import { ReceiptController } from './useCases/findAllReceiptUseCase/receipt.controller';
import { HttpModule } from '@nestjs/axios';
import { ReceiptService } from './useCases/findAllReceiptUseCase/receipt.service';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [ReceiptController],
  providers: [
    ReceiptService,

    //     {
    //       provide: APP_GUARD,
    //       useClass: ThrottlerGuard,
    //     },
  ],
})
export class ReceiptModule {}
