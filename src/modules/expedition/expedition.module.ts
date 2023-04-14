import { Module } from '@nestjs/common';
import { FilterExpeditionController } from './useCases/filterExpeditionUseCase/filter-expedition.controller';
import { FilterExpeditionService } from './useCases/filterExpeditionUseCase/filter-expedition.service';
import { ListExpeditionController } from './useCases/listExpeditionUseCase/list-expedition.controller';
import { ListExpeditionService } from './useCases/listExpeditionUseCase/list-expedition.service';

@Module({
  controllers: [FilterExpeditionController, ListExpeditionController],
  providers: [ FilterExpeditionService, ListExpeditionService]
})
export class ExpeditionModule {}
