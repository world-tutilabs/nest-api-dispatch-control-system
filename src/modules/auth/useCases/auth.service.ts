import { UserRepository } from "src/modules/users/repository/UserRepository";
import { JwtService } from '@nestjs/jwt';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{
    constructor(private userRepository: UserRepository, private jwtService: JwtService){}

    async validateUser(register: string, password: string){
        // const user = await this.userRepository.findByRegister(register)
        const user = {id: '1', register: '1', roles:'1', password: '1'}
        if(user && user.password == password){
            const {password, ...result} = user;
            return result;
        }
        return null
    }
    
    async login(user: any){
        const payload = {id: 'user.id', register: 'user.register', role: 'user.role'}
        return {
            access_token: this.jwtService.sign(payload,{secret: process.env.SECRET})

        }
    }
}