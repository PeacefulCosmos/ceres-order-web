import { ID } from '@datorama/akita';

export interface Item {
  _id: string;
  name: string;
  price: number;
  type: string;
  image?: string;
  description: string;
  available: boolean;
  companyId: number;
}

export function createItem(params: Partial<Item>) {
  return {} as Item;
}
