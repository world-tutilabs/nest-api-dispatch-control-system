import { NotasFiscaisService } from './notas-fiscais.service';
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import * as data from '../../../list-nf.json';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';

@Controller('notas-fiscais')
@ApiTags('Notas Fiscais')
export class NotasFiscaisController {
  constructor(private readonly notasFiscaisService: NotasFiscaisService) {}

  @ApiOperation({ summary: 'Lista Notas Fiscais - SAP' })
  @UseInterceptors(CacheInterceptor)
  @Get()
  async findAll() {
    return data;
    // return this.notasFiscaisService.findAll();
  }
}
