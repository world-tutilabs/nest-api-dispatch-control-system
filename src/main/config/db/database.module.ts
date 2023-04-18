import { Global, Module } from '@nestjs/common';
import { ExpeditionRepositoryInPrisma } from './prisma/repositories/ExpeditionRepositoyInPrisma';
import { ExpedtitionRepository } from 'src/modules/expedition/repository/ExpeditionRepository';
import { UserRepositoryInPrisma } from './prisma/repositories/UserRepositoryInPrisma';
import { UserRepository } from 'src/modules/users/repository/UserRepository';
import { PrismaService } from './prisma/prisma.service';
import { TruckRepository } from 'src/modules/truck/repository/TruckRepository';
import { TruckRepositoryInPrisma } from './prisma/repositories/TruckRepositoyInPrisma';

@Global()
@Module({
  providers: [PrismaService,{provide: ExpedtitionRepository, useClass: ExpeditionRepositoryInPrisma}, {provide: UserRepository
  , useClass: UserRepositoryInPrisma}, {provide: TruckRepository, useClass: TruckRepositoryInPrisma}],
  exports: [ExpedtitionRepository, UserRepository, TruckRepository]
})
export class DatabaseModule {}
