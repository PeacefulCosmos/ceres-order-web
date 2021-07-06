import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { OrderHistory } from './order-history.model';

export interface OrderHistoryState extends EntityState<OrderHistory> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'order-history',
  idKey: '_id',
})
export class OrderHistoryStore extends EntityStore<OrderHistoryState> {
  constructor() {
    super();
  }
}
