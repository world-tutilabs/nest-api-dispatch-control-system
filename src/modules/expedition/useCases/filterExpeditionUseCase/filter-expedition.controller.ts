import { Body, Controller, Get, Query } from '@nestjs/common';
import { FilterExpeditionService } from './filter-expedition.service';
import { ListExpeditionDTO } from '../../dto/list-expedition.dto';

@Controller('expedition')
export class FilterExpeditionController {
  constructor(private readonly filterExpeditionService: FilterExpeditionService){}
  @Get('filter')
 filter(@Body() listExpeditionDTO: ListExpeditionDTO, @Query() {limit, offset}){
    return this.filterExpeditionService.execute(listExpeditionDTO,Number(limit),Number(offset))
  }
}
