import { Injectable } from '@nestjs/common';
import { CreateExpeditionDto } from './dto/create-expedition.dto';
import { UpdateExpeditionDto } from './dto/update-expedition.dto';

@Injectable()
export class ExpeditionService {
  create(createExpeditionDto: CreateExpeditionDto) {
    return 'This action adds a new expedition';
  }

  findAll() {
    return `This action returns all expedition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expedition`;
  }

  update(id: number, updateExpeditionDto: UpdateExpeditionDto) {
    return `This action updates a #${id} expedition`;
  }

  remove(id: number) {
    return `This action removes a #${id} expedition`;
  }
}
