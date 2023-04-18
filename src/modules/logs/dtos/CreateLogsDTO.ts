import { IsDate, IsString, IsEmpty } from "class-validator";  


export class CreateLogsDTO {
    @IsString({message: "invoice tem que ser uma string"})
    invoice: string;


    @IsString({message: "description tem que ser uma string"})
    description: string;
}