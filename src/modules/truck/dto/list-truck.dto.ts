import { IsString, ValidateIf } from "class-validator";

export class ListTruckDTO{

    @IsString({message: 'Código do caminhão precisa ser uma string'})
    @ValidateIf((object,value) => value != null)
    code?: string;
}