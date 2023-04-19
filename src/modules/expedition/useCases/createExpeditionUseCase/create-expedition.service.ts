import { Injectable } from '@nestjs/common';
import { ExpedtitionRepository } from '../../repository/ExpeditionRepository';
import { CreateExpeditionDto } from '../../dto/create-expedition.dto';

@Injectable()
export class CreateExpeditionService {
  constructor(private readonly expeditionRepository: ExpedtitionRepository) {}

  async execute(createExpeditionDto: CreateExpeditionDto) {
    return this.expeditionRepository.create(createExpeditionDto);
  }
}
