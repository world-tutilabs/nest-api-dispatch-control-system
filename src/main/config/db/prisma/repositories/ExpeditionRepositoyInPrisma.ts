import { Expedition } from 'src/modules/expedition/entities/expedition.entity';
import { ExpedtitionRepository } from 'src/modules/expedition/repository/ExpeditionRepository';
import { PrismaService } from '../prisma.service';
import { ListExpeditionDTO } from 'src/modules/expedition/dto/list-expedition.dto';
import { Injectable } from '@nestjs/common';
import { UpdateExpeditionDto } from 'src/modules/expedition/dto/update-expedition.dto';
import { CreateExpeditionDto } from 'src/modules/expedition/dto/create-expedition.dto';
import { Status } from 'src/modules/expedition/enum/status.enum';

@Injectable()
export class ExpeditionRepositoryInPrisma implements ExpedtitionRepository {
  constructor(private prisma: PrismaService) {}
  async create(createExpeditionDto: CreateExpeditionDto): Promise<Expedition> {
    const {
      code_product,
      description_product,
      amount_nf,
      nf,
      observation,
      client,
      barcode,
      cart,
      user,
    } = createExpeditionDto;

    throw new Error("Method not implemented")
  }
  async findById(id: string): Promise<Expedition> {
    const data = await this.prisma.expedition.findUnique({
      where: {
        id,
      },
    });
    return data;
  }
  async updateStatusAndTruck(
    id: string,
    { fk_truck, fk_status }: UpdateExpeditionDto,
  ): Promise<void> {
    await this.prisma.expedition.update({
      data: {
        fk_truck,
        fk_status,
      },
      where: {
        id,
      },
    });
  }

  async filter(
    { client, nf, description_product }: ListExpeditionDTO,
    limit: number,
    offset: number,
  ): Promise<Expedition[]> {
    const data = await this.prisma.expedition.findMany({
      where: {
        OR: [
          {
            client: client
              ? {
                  mode: 'insensitive',
                  contains: client,
                }
              : undefined,
          },
          {
            nf: nf
              ? {
                  mode: 'insensitive',
                  contains: nf,
                }
              : undefined,
          },
          {
            items: {
              some: {
                description_product: description_product ? {
                  contains: description_product,
                  mode: 'insensitive'
                } : undefined
              }
            }
          }
        ],
      },
      skip: offset,
      take: limit,
    });
    return data;
  }

  async list(limit: number, offset: number): Promise<Expedition[]> {
    const data = await this.prisma.expedition.findMany({
      take: limit,
      skip: offset,
    });
    return data;
  }
}
