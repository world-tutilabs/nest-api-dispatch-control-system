import { Injectable } from "@nestjs/common";
import { JwtStrategy } from "../../strategies/jwt.strategy";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class ValidateTokenService{
    async execute(data: string){
        const [,token] = data.split(" ")
        const jwtStrategy = new JwtService({secret: process.env.SECRET}).verify(token)
        console.log(jwtStrategy)
        // return jwtStrategy
    }
}