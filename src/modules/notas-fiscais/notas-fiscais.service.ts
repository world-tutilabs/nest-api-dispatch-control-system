import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { NotasFiscaisRepository } from './repository/NotasFiscaisRepository';

@Injectable()
export class NotasFiscaisService implements NotasFiscaisRepository {
  constructor(private readonly httpService: HttpService) {}

  async findAll(offset?: number, limit?: number): Promise<AxiosResponse<any>> {
    const { data } = await this.httpService.axiosRef.get(
      `https://pokeapi.co/api/v2/pokemon/${2}`, //TODO: Replace with the SAP endpoint
    );
    return await data;
  }
}
