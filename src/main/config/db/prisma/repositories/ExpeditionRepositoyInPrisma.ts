import { Expedition } from "src/modules/expedition/entities/expedition.entity";
import { ExpedtitionRepository } from "src/modules/expedition/repository/ExpeditionRepository";
import { PrismaService } from "../prisma.service";
import { ListExpeditionDTO } from "src/modules/expedition/dto/list-expedition.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ExpeditionRepositoryInPrisma implements ExpedtitionRepository{
  constructor(private prisma: PrismaService){}

  async filter({client,nf,description_product}:ListExpeditionDTO, limit: number, offset: number): Promise<Expedition[]> {
    const data = await this.prisma.expedition.findMany({
      where: {
        OR: [
          {
            client: client ? {
              mode: "insensitive",
              contains: client
          } : undefined,
        }, {
          nf: nf ? {
            mode: "insensitive",
            contains: nf 
          } : undefined,
        }, 
        {
          description_product: description_product ? {
            mode: "insensitive",
            contains : description_product 
          }: undefined
        }
        ]
      },
      skip: offset,
      take: limit
    })
    return data
  }

  async list(limit: number, offset: number): Promise<Expedition[]> {
    const data = await this.prisma.expedition.findMany({
      take: limit,
      skip: offset
    })
    return data
  }
}