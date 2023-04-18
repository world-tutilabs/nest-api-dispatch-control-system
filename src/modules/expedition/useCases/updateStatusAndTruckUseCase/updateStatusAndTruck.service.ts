import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ExpedtitionRepository } from "../../repository/ExpeditionRepository";
import { UpdateExpeditionDto } from "../../dto/update-expedition.dto";
import { Status } from "../../enum/status.enum";
import { TruckRepository } from "src/modules/truck/repository/TruckRepository";

@Injectable()
export class UpdateStatusAndTruckService{
    constructor(private expeditionRepository: ExpedtitionRepository, private truckRepository: TruckRepository){}

    async execute(id: string, {truck_code}: UpdateExpeditionDto){
        const expedition = await this.expeditionRepository.findById(id)

        if(!expedition){
            throw new HttpException('Expedição não encontrada', HttpStatus.NOT_FOUND)
        }
        
        if(expedition.fk_truck){
            throw new HttpException('Caminhão já vinculado a esta expedição', HttpStatus.BAD_REQUEST)
        }

        const truck = (await this.truckRepository.findByCode({code: truck_code}))
        if(!truck){
            throw new HttpException('Caminhão não encontrado', HttpStatus.NOT_FOUND)
        }
        const fk_truck = truck.id

        const fk_status = Status.Concluido
        return await this.expeditionRepository.updateStatusAndTruck(id,{fk_truck,fk_status})
    }
}