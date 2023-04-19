import { Controller, Get, Body, Param  } from '@nestjs/common';
import { CreateLogsDTO } from '../../dtos/CreateLogsDTO';
import { ApiTags } from '@nestjs/swagger';
import { ListLogsByNFService } from './list-logs-by-nf.service';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@ApiTags("Logs")
@Controller('logs')
export class ListLogsController {
  constructor(private readonly listLogsByNFService: ListLogsByNFService) {}
  
  @Get(":invoice")
  async handle(@Param("invoice") invoice: string) {
   
    if(!invoice){
      throw new HttpException('invoice não encontrado', HttpStatus.NOT_FOUND)

    }
    
    return await this.listLogsByNFService.execute(invoice)
     
  }

}