import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { ReceiptRepository } from '../../repository/ReceiptRepository';

@Injectable()
export class ReceiptService implements ReceiptRepository {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<AxiosResponse<any>> {
    const { data } = await this.httpService.axiosRef.get(
      `https://pokeapi.co/api/v2/pokemon/${2}`, //TODO: Replace with the SAP endpoint
    );
    return await data;
  }
}
