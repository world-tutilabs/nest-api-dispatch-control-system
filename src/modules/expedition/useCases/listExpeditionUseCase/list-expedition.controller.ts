import { Controller, Get, Query } from '@nestjs/common';
import { ListExpeditionService } from './list-expedition.service';

@Controller('expedition')
export class ListExpeditionController {
  constructor(private readonly listExpeditionServicer: ListExpeditionService){}
    @Get()
    list(@Query() {limit, offset}){
    return this.listExpeditionServicer.execute(Number(limit),Number(offset))
  }
}