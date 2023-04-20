import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateExpeditionDto } from '../../dto/update-expedition.dto';
import { UpdateStatusAndTruckService } from './updateStatusAndTruck.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Expedition')
@ApiBearerAuth()
@Controller('expedition')
export class UpdateStatusAndTruckController {
  constructor(
    private updateStatusAndTruckService: UpdateStatusAndTruckService,
  ) {}

  @ApiOperation({ summary: 'Atualiza caminhão e status de expedição' })
  @ApiParam({
    description: 'Id da expedição',
    name: 'id',
  })
  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body() { truck_code }: UpdateExpeditionDto,
  ) {
    return await this.updateStatusAndTruckService.execute(id, { truck_code });
  }
}
