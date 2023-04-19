import { Controller, Post, Body, UseGuards } from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SendEmailAlertDivergenceService } from '../services/sendEmailAlertDivergence.service';
import { ISendMailAlertDivergenceDTO } from '../dto/ISendMailAlertDivergenceDTO';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@ApiTags("Mail")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('mail')
export class SendEmailAlertDivergenceController {
  constructor(private readonly sendEmailAlertDivergenceService: SendEmailAlertDivergenceService) {}
  
  @Post()
  @ApiBody({
    description: "Envio de email ao encontrar divergencias.",
    type: ISendMailAlertDivergenceDTO
  })
  async handle(@Body() sendMailAlertDivergenceDTO: ISendMailAlertDivergenceDTO) {
    return await this.sendEmailAlertDivergenceService.execute(sendMailAlertDivergenceDTO);
  }

}