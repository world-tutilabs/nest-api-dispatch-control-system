
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Logs, LogsSchema } from './schemas/logs.schema';
import { CreateLogsController } from './useCase/CreateLogsUseCase/create-logs.contoller';
import { CreateLogsService } from './useCase/CreateLogsUseCase/create-logs.service';
import { ListLogsController } from './useCase/ListLogsByNfUseCase/list-logs-by-nf.controller';
import { ListLogsByNFService } from './useCase/ListLogsByNfUseCase/list-logs-by-nf.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Logs.name, schema: LogsSchema }])],
  controllers: [CreateLogsController, ListLogsController],
  providers: [CreateLogsService, ListLogsByNFService],
})
export class LogsModule {}