import { ID } from '@datorama/akita';

export interface OrderItem {
  _id: string;
  name: string;
  price: number;
  description: string;
  available: boolean;
  type: string;
  image: string;
  quantity: number;
}

export function createOrderItem(params: Partial<OrderItem>) {
  return {} as OrderItem;
}
