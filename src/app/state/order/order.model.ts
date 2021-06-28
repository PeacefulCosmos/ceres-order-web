import { ID } from '@datorama/akita';
import { Item } from '../item';

export interface Order {
  _id: string;
  orderId: string;
  companyId: number;
  seatIndex: string[];
  status: string;
  items?: Item[];
  accessCode?: string;
  createdAt: Date;
  modifiedAt?: Date;
}

export function createOrder(params: Partial<Order>) {
  return {} as Order;
}
