import { IsInt, IsString, ValidateIf } from "class-validator";  

export class ListExpeditionDTO{
  @IsInt({message: 'Nota fiscal deve ser um inteiro'})
  @ValidateIf((object, value) => value != null)
  nf?: number;

  @IsString({message: 'Produto deve ser uma string'})
  @ValidateIf((object, value) => value != null)
  produto?: string;

  @IsString({message: 'Cliente deve ser uma string'})
  @ValidateIf((object, value) => value != null)
  cliente?: string;

  @IsString({message: 'Id do status deve ser uma string'})
  @ValidateIf((object, value) => value != null)
  id_status?: string;
}