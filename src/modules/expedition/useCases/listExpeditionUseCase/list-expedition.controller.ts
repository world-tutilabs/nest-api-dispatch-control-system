import { Controller, Get, Query } from '@nestjs/common';
import { ListExpeditionService } from './list-expedition.service';
import { ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Expedition } from '../../entities/expedition.entity';

@UseGuards(JwtAuthGuard)
@ApiTags('expedition')
@Controller('expedition')
export class ListExpeditionController {
  constructor(private readonly listExpeditionServicer: ListExpeditionService){}

    @ApiOperation({summary: "Lista todas as expedições"})
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
    @Get()
    list(@Query() {limit, offset}){

    return this.listExpeditionServicer.execute(limit,offset)

  }
}
