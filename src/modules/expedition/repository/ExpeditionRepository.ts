import { CreateExpeditionDto } from '../dto/create-expedition.dto';
import { Expedition } from '../entities/expedition.entity';

export abstract class ExpedtitionRepository {
  abstract list();
  abstract create(
    CreateExpeditionDto: CreateExpeditionDto,
  ): Promise<Expedition>;
}
