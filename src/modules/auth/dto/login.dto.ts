import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class LoginDTO{
    @IsString({message: "Matrícula precisa ser uma string"})
    @IsNotEmpty({message: "Matrícula é obrigatória"})
    @ApiProperty({description: "Matrícula"})
    register: string

    @IsString({message: "Senha precisa ser uma string"})
    @IsNotEmpty({message: "Senha é obrigatória"})
    @ApiProperty({description: "Senha"})
    password: string
}