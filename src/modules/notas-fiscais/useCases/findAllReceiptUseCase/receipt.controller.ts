import { ReceiptService } from './receipt.service';
import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import * as data from '../../../../../list-nf.json';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { JwtAuthGuard } from '../../../auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@Controller('notas-fiscais')
@UseGuards(JwtAuthGuard)
@ApiTags('Notas Fiscais')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @ApiOperation({ summary: 'Lista Notas Fiscais - SAP' })
  @UseInterceptors(CacheInterceptor)
  @Get()
  async findAll() {
    return data;
    // return this.receiptService.findAll();
  }
}
