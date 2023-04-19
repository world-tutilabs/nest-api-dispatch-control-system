import { Controller, Post, Body, UseGuards  } from '@nestjs/common';
import { CreateLogsDTO } from '../../dtos/CreateLogsDTO';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateLogsService } from './create-logs.service';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@ApiTags("Logs")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('logs')
export class CreateLogsController {
  constructor(private readonly createLogsService: CreateLogsService) {}
  
  @Post()
  async handle(@Body() createLogsDTO: CreateLogsDTO) {
    
    await this.createLogsService.execute(createLogsDTO)
     
  }

}