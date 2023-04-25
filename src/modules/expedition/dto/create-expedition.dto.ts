import { IsInt, IsString, ValidateIf } from 'class-validator';
import { Cart, Status } from '../entities/expedition.entity';
import { Truck } from 'src/modules/truck/entities/truck.entity';
import { Items } from '../entities/expedition.entity';

export class CreateExpeditionDto {
  id: string;
  @IsInt({ message: 'Quantidade da NF deve ser um inteiro' })
  @ValidateIf((object, value) => value != null)
  amount_nf?: number;
  @IsString({ message: 'NF deve ser do tipo string' })
  @ValidateIf((object, value) => value != null)
  nf?: string;
  @IsString({ message: 'Obeservação deve ser do tipo string' })
  @ValidateIf((object, value) => value != null)
  observation?: string;
  @IsString({ message: 'Cliente deve ser do tipo string' })
  @ValidateIf((object, value) => value != null)
  client?: string;
  items: Items[];
  truck?: Truck;
  status: Status;
  user: any;
}
