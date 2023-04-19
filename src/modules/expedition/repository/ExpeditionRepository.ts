import { ListExpeditionDTO } from '../dto/list-expedition.dto';
import { Expedition } from '../entities/expedition.entity';

export abstract class ExpedtitionRepository {
  abstract filter(
    listExpeditionDTO: ListExpeditionDTO,
    limit: number,
    offset: number,
  ): Promise<Expedition[]>;
  abstract list(limit: number, offset: number): Promise<Expedition[]>;
}
