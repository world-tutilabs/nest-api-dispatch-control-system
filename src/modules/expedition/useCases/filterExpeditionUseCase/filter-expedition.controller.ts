import { Body, Controller, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ListExpeditionDTO } from '../../dto/list-expedition.dto';
import { Expedition } from '../../entities/expedition.entity';
import { FilterExpeditionService } from './filter-expedition.service';

@ApiTags('expedition')
@Controller('expedition')
export class FilterExpeditionController {
  constructor(private readonly filterExpeditionService: FilterExpeditionService){}
  
  @ApiOperation({summary: "Filtra expedições", description: "Filtra expedição por nf, descrição do produto e cliente. A busca pelos três parâmetros é feita por um campo de pesquisa. O mesmo valor digitado no campo será mandado para os três."})
  @ApiOkResponse({type: Expedition, isArray: true})
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
  })
  @Post('filter')
  filter(@Body() listExpeditionDTO: ListExpeditionDTO, @Query() {limit, offset}){
    return this.filterExpeditionService.execute(listExpeditionDTO, limit, offset)
  }
}
