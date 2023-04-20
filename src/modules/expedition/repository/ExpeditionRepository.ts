import { CreateExpeditionDto } from '../dto/create-expedition.dto';
import { ListExpeditionDTO } from '../dto/list-expedition.dto';
import { UpdateExpeditionDto } from '../dto/update-expedition.dto';
import { Expedition } from '../entities/expedition.entity';

export abstract class ExpedtitionRepository {
  abstract findById(id: string): Promise<Expedition>;
  abstract filter(
    listExpeditionDTO: ListExpeditionDTO,
    limit: number,
    offset: number,
  ): Promise<Expedition[]>;
  abstract list(limit: number, offset: number): Promise<Expedition[]>;
  abstract updateStatusAndTruck(
    id: string,
    updateExpeditionDto: UpdateExpeditionDto,
  ): Promise<void>;
  abstract create(
    CreateExpeditionDto: CreateExpeditionDto,
  ): Promise<Expedition>;
}
