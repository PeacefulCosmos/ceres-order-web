import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { OrderHistoryStore, OrderHistoryState } from './order-history.store';

@Injectable({ providedIn: 'root' })
export class OrderHistoryQuery extends QueryEntity<OrderHistoryState> {

  constructor(protected store: OrderHistoryStore) {
    super(store);
  }

}
