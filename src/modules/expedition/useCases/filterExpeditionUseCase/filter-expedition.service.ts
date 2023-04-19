import { Injectable } from '@nestjs/common';
import { ListExpeditionDTO } from '../../dto/list-expedition.dto';
import { ExpedtitionRepository } from '../../repository/ExpeditionRepository';

@Injectable()
export class FilterExpeditionService {
<<<<<<< HEAD
  constructor(private readonly expeditionRepository: ExpedtitionRepository) { }
  async execute({ client, nf, description_product }: ListExpeditionDTO, limit = 10, offset = 0) {
    return await this.expeditionRepository.filter({ client, description_product, nf }, Number(limit), Number(offset))
=======
  constructor(private readonly expeditionRepository: ExpedtitionRepository){}
  async execute({client,nf,description_product}: ListExpeditionDTO, limit = 10, offset = 0){
    return await this.expeditionRepository.filter({client,description_product,nf},Number(limit),Number(offset))
>>>>>>> 3276238f4cf5c8175364775d4a7dacd5c029afb2
  }
}   
