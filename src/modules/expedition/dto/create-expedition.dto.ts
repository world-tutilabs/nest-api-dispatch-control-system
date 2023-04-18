import { IsInt, IsString, ValidateIf } from 'class-validator';
import { Cart, Status } from '../entities/expedition.entity';
import { Truck } from 'src/modules/truck/entities/truck.entity';

export class CreateExpeditionDto {
  id: string;
  @IsInt({ message: 'Quantidade da NF deve ser um inteiro' })
  @ValidateIf((object, value) => value != null)
  amount_nf?: number;
  @IsString({ message: 'NF deve ser do tipo string' })
  @ValidateIf((object, value) => value != null)
  nf?: string;
  @IsString({ message: 'Código de Barra deve ser do tipo string' })
  @ValidateIf((object, value) => value != null)
  barcode?: string;
  @IsString({ message: 'Descrição do Produto deve ser do tipo string' })
  @ValidateIf((object, value) => value != null)
  description_product?: string;
  @IsString({ message: 'Código do Produto deve ser do tipo string' })
  @ValidateIf((object, value) => value != null)
  code_product?: string;
  @IsString({ message: 'Obeservação deve ser do tipo string' })
  @ValidateIf((object, value) => value != null)
  observation?: string;
  @IsString({ message: 'Cliente deve ser do tipo string' })
  @ValidateIf((object, value) => value != null)
  client?: string;
  cart: Cart[];
  truck: Truck;
  status: Status;
}
