import { Module } from '@nestjs/common';
import { FilterExpeditionController } from './useCases/filterExpeditionUseCase/filter-expedition.controller';
import { FilterExpeditionService } from './useCases/filterExpeditionUseCase/filter-expedition.service';
import { ListExpeditionController } from './useCases/listExpeditionUseCase/list-expedition.controller';
import { ListExpeditionService } from './useCases/listExpeditionUseCase/list-expedition.service';
import { UpdateStatusAndTruckController } from './useCases/updateStatusAndTruckUseCase/updateStatusAndTruck.controller';
import { UpdateStatusAndTruckService } from './useCases/updateStatusAndTruckUseCase/updateStatusAndTruck.service';
import { CreateExpeditionController } from './useCases/createExpeditionUseCase/create-expedition.controller';
import { CreateExpeditionService } from './useCases/createExpeditionUseCase/create-expedition.service';

@Module({
  controllers: [
    FilterExpeditionController,
    ListExpeditionController,
    UpdateStatusAndTruckController,
    CreateExpeditionController,
  ],
  providers: [
    FilterExpeditionService,
    ListExpeditionService,
    UpdateStatusAndTruckService,
    CreateExpeditionService,
  ],
})
export class ExpeditionModule {}
