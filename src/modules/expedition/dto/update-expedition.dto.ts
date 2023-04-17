import { IsNotEmpty, IsString, ValidateIf } from "class-validator";

export class UpdateExpeditionDto {

    @IsString({message: 'Código do caminhão precisa ser uma string'})
    @IsNotEmpty({message: 'Código do caminhão não pode ser enviado vazio'})
    truck_code?: string;

    @IsString({message: 'Id do caminhão precisa ser uma string'})
    @ValidateIf((object,value) => value != null)
    fk_truck?: string;

    @IsString({message: 'Id do status precisa ser uma string'})
    @ValidateIf((object,value) => value != null)
    fk_status?: string;
}
