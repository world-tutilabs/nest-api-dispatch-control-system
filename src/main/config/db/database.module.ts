import { Module } from '@nestjs/common';
import { ExpeditionRepositoryInPrisma } from './prisma/repositories/ExpeditionRepositoyInPrisma';
import { ExpedtitionRepository } from 'src/modules/expedition/repository/ExpeditionRepository';

@Module({
  providers: [{provide: ExpedtitionRepository, useClass: ExpeditionRepositoryInPrisma}],
  exports: [ExpedtitionRepository]
})
export class DatabaseModule {}
