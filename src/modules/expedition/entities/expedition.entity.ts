export class Expedition {
  id: string;
  amount: number;
  nf: string;
  observation: string;
  client: string;
  fk_user: string;
  fk_truck?: string;
  fk_status: string;
}

export class Items {
  id: string;
  barcode: string;
  description_product: string;
  code_product: string;
  fk_expedition: string;
  amount: number;
}

export class Cart {
  amount: number;
  code: string;
  fk_items: string;
}

export type Status = {
  id: string;
  description: string;
};
