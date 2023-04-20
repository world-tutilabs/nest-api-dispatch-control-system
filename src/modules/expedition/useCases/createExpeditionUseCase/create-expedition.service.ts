import { Injectable } from '@nestjs/common';
import { ExpedtitionRepository } from '../../repository/ExpeditionRepository';
import { CreateExpeditionDto } from '../../dto/create-expedition.dto';
import { TruckRepository } from 'src/modules/truck/repository/TruckRepository';

@Injectable()
export class CreateExpeditionService {
  constructor(
    private readonly expeditionRepository: ExpedtitionRepository,
    private truckRepository: TruckRepository,
  ) {}

  async execute(createExpeditionDto: CreateExpeditionDto) {
    return this.expeditionRepository.create(createExpeditionDto);
  }
}
