import { Controller, Post, Body  } from '@nestjs/common';
import { CreateLogsDTO } from '../../dtos/CreateLogsDTO';
import { ApiTags } from '@nestjs/swagger';
import { CreateLogsService } from './create-logs.service';

@ApiTags("Logs")
@Controller('logs')
export class CreateLogsController {
  constructor(private readonly createLogsService: CreateLogsService) {}
  
  @Post()
  async handle(@Body() createLogsDTO: CreateLogsDTO) {
    
    await this.createLogsService.execute(createLogsDTO)
     
  }

}