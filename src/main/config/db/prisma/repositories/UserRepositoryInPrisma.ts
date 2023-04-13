import { User } from "src/modules/users/entities/user.entity";
import { UserRepository } from "src/modules/users/repository/UserRepository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepositoryInPrisma implements UserRepository{
    constructor(private prisma: PrismaService){}
    async findByRegister(register: string): Promise<User>{
        const data = await this.prisma.user.findUnique({
           
            where: {
                register
            }
        })
        return data
    }
}