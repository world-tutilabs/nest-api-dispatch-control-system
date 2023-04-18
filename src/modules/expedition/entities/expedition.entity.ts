import { Truck } from 'src/modules/truck/entities/truck.entity';
import { User } from 'src/modules/users/entities/user.entity';

export class Expedition {
  id: string;
  amount: number;
  nf: string;
  barcode: string;
  description_product: string;
  code_product: string;
  observation: string;
  client: string;
  // cart: Cart[];
  // truck: Truck;
  fk_user: string;
  // status: string;
  fk_truck: string;
  // fk_user: string;
  fk_status: string;
}

export type Cart = {
  amount: number;
  code: string;
};

export type Status = {
  id: string;
  description: string;
};
