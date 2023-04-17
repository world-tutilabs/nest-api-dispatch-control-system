import { IsInt, IsString, ValidateIf } from "class-validator";  
import { ApiProperty } from "@nestjs/swagger";

export class ListExpeditionDTO{
  @ApiProperty()
  @IsString({message: 'Nota fiscal deve ser uma string'})
  @ValidateIf((object, value) => value != null)
  nf?: string;

  @ApiProperty()
  @IsString({message: 'Produto deve ser uma string'})
  @ValidateIf((object, value) => value != null)
  description_product?: string;

  @ApiProperty()
  @IsString({message: 'Cliente deve ser uma string'})
  @ValidateIf((object, value) => value != null)
  client?: string;
}