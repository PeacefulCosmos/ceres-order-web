import { ID } from '@datorama/akita';
import { OrderItem } from '../order-item';

export interface OrderHistory {
  _id?: string;
  orderId: string;
  companyId: number;
  seatIndex: string[];
  items?: OrderItem[];
  totalPrice: number;
  accessCode?: string;
  createdAt: Date;
  modifiedAt?: Date;
}

export function createOrderHistory(params: Partial<OrderHistory>) {
  return {} as OrderHistory;
}
