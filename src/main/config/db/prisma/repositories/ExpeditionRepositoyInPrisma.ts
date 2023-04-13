import { ExpedtitionRepository } from "src/modules/expedition/repository/ExpeditionRepository";

export class ExpeditionRepositoryInPrisma implements ExpedtitionRepository{
  list() {
    throw new Error("Method not implemented.");
  }
}