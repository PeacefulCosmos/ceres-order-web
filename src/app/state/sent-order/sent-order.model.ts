import { ID } from '@datorama/akita';

export type SentOrderRaw = {
  _id?: string;
  sentOrder_id?: string;
  name: string;
  price: number;
  description: string;
  available: boolean;
  type: string;
  image?: string;
  quantity: number;
  companyId: string;
  orderTime?: Date;
};

export interface SentOrder {
  sentOrder_id?: string;
  name: string;
  price: number;
  description: string;
  available: boolean;
  type: string;
  image?: string;
  quantity: number;
  companyId: string;
  orderTime?: Date;
}

export type SentOrdersRaw = {
  _id?: string;
  sentItems: SentOrder[];
  orderTime?: Date;
  sentOrder_id?: string;
  companyId: string;
};

export interface SentOrders {
  sentItems: SentOrder[];
  orderTime?: Date;
  sentOrder_id?: string;
  companyId: string;
}

export function createSentOrder(params: Partial<SentOrder>) {
  return {} as SentOrder;
}
