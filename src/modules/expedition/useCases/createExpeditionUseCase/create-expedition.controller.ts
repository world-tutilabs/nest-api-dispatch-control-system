import { use } from 'passport';
import { CreateExpeditionDto } from './../../dto/create-expedition.dto';
import { CreateExpeditionService } from './create-expedition.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('expedition')
export class CreateExpeditionController {
  constructor(
    private readonly createExpeditionService: CreateExpeditionService,
  ) {}

  @Post()
  create(@Body() createExpeditionDto: CreateExpeditionDto) {
    this.createExpeditionService.execute(createExpeditionDto);
  }
}
