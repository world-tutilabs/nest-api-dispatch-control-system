import { Body, Controller, Get, Query } from '@nestjs/common';
import { ListExpeditionService } from './list-expedition.service';
import { ListExpeditionDTO } from '../../dto/list-expedition.dto';

@Controller('expedition')
export class ListExpeditionController {
  constructor(private readonly listExpeditionService: ListExpeditionService) {}
  @Get()
  list(
    @Body() listExpeditionDTO: ListExpeditionDTO,
    @Query() { limit, offset },
  ) {
    return this.listExpeditionService.execute(
      listExpeditionDTO,
      Number(limit),
      Number(offset),
    );
  }
}
