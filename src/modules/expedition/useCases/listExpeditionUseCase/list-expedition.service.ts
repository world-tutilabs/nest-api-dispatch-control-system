import { Injectable } from "@nestjs/common";
import { ExpedtitionRepository } from "../../repository/ExpeditionRepository";

@Injectable()
export class ListExpeditionService{
    constructor(private expeditionRepository: ExpedtitionRepository){}
    async execute(limit = 10, offset = 0){
        return await this.expeditionRepository.list(limit,offset)
    }
}