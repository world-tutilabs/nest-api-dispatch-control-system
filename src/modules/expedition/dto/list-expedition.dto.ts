import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateIf } from "class-validator";

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