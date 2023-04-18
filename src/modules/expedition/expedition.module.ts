import { Module } from '@nestjs/common';
import { ListExpeditionController } from './useCases/listExpeditionUseCase/list-expedition.controller';
import { ListExpeditionService } from './useCases/listExpeditionUseCase/list-expedition.service';
import { CreateExpeditionService } from './useCases/createExpeditionUseCase/create-expedition.service';
import { CreateExpeditionController } from './useCases/createExpeditionUseCase/create-expedition.controller';
@Module({
  controllers: [ListExpeditionController, CreateExpeditionController],
  providers: [ListExpeditionService, CreateExpeditionService],
})
export class ExpeditionModule {}
