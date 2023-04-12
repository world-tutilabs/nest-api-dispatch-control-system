import { Module } from '@nestjs/common';
import { ListExpeditionController } from './useCases/listExpeditionUseCase/list-expedition.controller';
import { ListExpeditionService } from './useCases/listExpeditionUseCase/list-expedition.service';

@Module({
  controllers: [ListExpeditionController],
  providers: [ ListExpeditionService]
})
export class ExpeditionModule {}
