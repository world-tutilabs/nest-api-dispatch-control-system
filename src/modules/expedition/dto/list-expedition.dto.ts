import { IsString, ValidateIf } from "class-validator";

export class ListExpeditionDTO{
  @IsString({message: 'Nota fiscal deve ser uma string'})
  @ValidateIf((object, value) => value != null)
  nf?: string;

  @IsString({message: 'Produto deve ser uma string'})
  @ValidateIf((object, value) => value != null)
  description_product?: string;

  @IsString({message: 'Cliente deve ser uma string'})
  @ValidateIf((object, value) => value != null)
  client?: string;

  @IsString({message: 'Id do status deve ser uma string'})
  @ValidateIf((object, value) => value != null)
  id_status?: string;
}