import { Body, Controller, Param, Put } from "@nestjs/common";
import { UpdateExpeditionDto } from "../../dto/update-expedition.dto";
import { UpdateStatusAndTruckService } from "./updateStatusAndTruck.service";

@Controller('expedition')
export class UpdateStatusAndTruckController{
    constructor(private updateStatusAndTruckService: UpdateStatusAndTruckService){}

    @Put('update/:id')
    async update(@Param('id') id: string, @Body() {truck_code}: UpdateExpeditionDto){
        return await this.updateStatusAndTruckService.execute(id,{truck_code})
    }
}