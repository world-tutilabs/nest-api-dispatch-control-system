import { Module } from '@nestjs/common';
import { ListExpeditionController } from './useCases/listExpeditionUseCase/list-expedition.controller';
import { ListExpeditionService } from './useCases/listExpeditionUseCase/list-expedition.service';
import { DatabaseModule } from 'src/main/config/db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ListExpeditionController],
  providers: [ ListExpeditionService]
})
export class ExpeditionModule {}
