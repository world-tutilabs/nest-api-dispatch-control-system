import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ListExpeditionService } from './list-expedition.service';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Expedition } from '../../entities/expedition.entity';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard'

@UseGuards(JwtAuthGuard)
@ApiTags('Expedition')
@ApiBearerAuth()
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
  @ApiOperation({summary: "Listar expedições - Não disponiveis"})
    list(@Query() {limit, offset}){

    return this.listExpeditionServicer.execute(limit,offset)

  }
}
