import { Controller, Get } from '@nestjs/common';
import { ListExpeditionService } from './list-expedition.service';

@Controller('expedition')
export class ListExpeditionController {
  constructor(private readonly listExpeditionService: ListExpeditionService){}
  @Get()
  list(){
    return this.listExpeditionService.execute()
  }
}
