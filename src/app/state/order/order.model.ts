import { ID } from '@datorama/akita';
import { Item } from '../item';
import { OrderItem } from '../order-item';

export interface Order {
  _id: string;
  orderId: string;
  companyId: number;
  seatIndex: string[];
  status: string;
  items?: OrderItem[];
  accessCode?: string;
  createdAt: Date;
  modifiedAt?: Date;
}

export function createOrder(params: Partial<Order>) {
  return {} as Order;
}
