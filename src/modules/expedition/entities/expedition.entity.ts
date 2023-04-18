import { User } from 'src/modules/users/entities/user.entity';

export class Expedition {
  amount_nf: number;
  nf: string;
  barcode: string;
  description_product: string;
  code_product: string;
  observation: string;
  client: string;
  cart: Cart[];
  truck: Truck;
  user: Pick<User, 'id'>;
  status: Pick<Status, 'id'>;
}

export type Cart = {
  amount: number;
  code: string;
};
export type Truck = {
  description: string;
  code: string;
};

export type Status = {
  id: string;
  description: string;
};
