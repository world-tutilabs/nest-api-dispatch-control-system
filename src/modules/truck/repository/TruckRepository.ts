import { ListTruckDTO } from "../dto/list-truck.dto";
import { Truck } from "../entities/truck.entity";

export abstract class TruckRepository{
    abstract findByCode({code}: ListTruckDTO):Promise<Truck>
}