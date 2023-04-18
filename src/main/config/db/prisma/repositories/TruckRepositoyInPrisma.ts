import { ListTruckDTO } from "src/modules/truck/dto/list-truck.dto";
import { Truck } from "src/modules/truck/entities/truck.entity";
import { TruckRepository } from "src/modules/truck/repository/TruckRepository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TruckRepositoryInPrisma implements TruckRepository{
    constructor(private prisma: PrismaService){}
    async findByCode({ code }: ListTruckDTO): Promise<Truck> {
        const data = await this.prisma.truck.findUnique({
            where: {
                code
            }
        })
        return data
    }
}