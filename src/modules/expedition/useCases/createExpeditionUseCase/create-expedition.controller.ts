import { CreateExpeditionDto } from './../../dto/create-expedition.dto';
import { CreateExpeditionService } from './create-expedition.service';
import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
@UseGuards(JwtAuthGuard)
@Controller('expedition')
export class CreateExpeditionController {
  constructor(
    private readonly createExpeditionService: CreateExpeditionService,
  ) {}

  @Post()
  create(@Body() createExpeditionDto: CreateExpeditionDto, @Req() user: any) {
    const newData = Object.assign({}, createExpeditionDto, { user: user.user });
    this.createExpeditionService.execute(newData);
  }
}
