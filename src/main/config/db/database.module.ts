import { Module } from '@nestjs/common';
import { ExpeditionRepositoryInPrisma } from './prisma/repositories/ExpeditionRepositoyInPrisma';

@Module({
  providers: [{provide: ExpedtitionRepository, useClass: ExpeditionRepositoryInPrisma}],
  exports: [ExpedtitionRepository]
})
export class DatabaseModule {}
