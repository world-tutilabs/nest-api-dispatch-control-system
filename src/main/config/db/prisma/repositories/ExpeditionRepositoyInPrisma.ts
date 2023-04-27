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
  async create(createExpeditionDto: CreateExpeditionDto): Promise<void> {
    const { amount_nf, nf, observation, client, user, items } =
      createExpeditionDto;
    await this.prisma.expedition
      .create({
        data: {
          amount: amount_nf,
          client,
          nf,
          observation,
          user: {
            connect: {
              id: user.id,
            },
          },
          status: {
            connect: {
              id: Status.AguardandoBau,
            },
          },
        },
      })
      .then(async (data) => {
        await Promise.all(
          items.map(async (item: any) => {
            return await this.prisma.items
              .create({
                data: {
                  amount: item.amount,
                  amount_monoblock: item.amount_monoblock,
                  barcode: item.barcode,
                  code_product: item.code_product,
                  description_product: item.description_product,
                  id_expedition: data.id,
                },
              })
              .then(async (data) => {
                return await Promise.all(
                  item.cart.map(async (cart: any) => {
                    await this.prisma.cart.create({
                      data: {
                        amount: cart.amount_product,
                        code: cart.code,
                        id_items: data.id,
                      },
                    });
                  }),
                );
              });
          }),
        );
      });
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
                description_product: description_product
                  ? {
                      contains: description_product,
                      mode: 'insensitive',
                    }
                  : undefined,
              },
            },
          },
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
