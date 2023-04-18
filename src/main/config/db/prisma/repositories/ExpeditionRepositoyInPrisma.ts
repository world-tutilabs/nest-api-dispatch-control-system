import { CreateExpeditionDto } from 'src/modules/expedition/dto/create-expedition.dto';
import { Expedition } from 'src/modules/expedition/entities/expedition.entity';
import { ExpedtitionRepository } from 'src/modules/expedition/repository/ExpeditionRepository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class ExpeditionRepositoryInPrisma implements ExpedtitionRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createExpeditionDto: CreateExpeditionDto): Promise<Expedition> {
    const {
      code_product,
      description_product,
      amount_nf,
      nf,
      observation,
      client,
      barcode,
      truck,
      cart,
    } = createExpeditionDto;
    await this.prisma.expedition.create({
      data: {
        amount: amount_nf,
        barcode,
        code_product,
        client,
        description_product,
        nf,
        observation,
        truck: {
          create: {
            code: truck.code,
            description: truck.description,
          },
        },
        cart: {
          createMany: {
            data: cart,
          },
        },
        user: {
          connect: {
            id: '1',
          },
        },
        status: {
          connect: {
            id: '1',
          },
        },
      },
    });
    return null;
  }
  list() {
    throw new Error('Method not implemented.');
  }
}
