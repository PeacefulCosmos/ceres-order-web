import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { OrderItemStore, OrderItemState } from './order-item.store';

@Injectable({ providedIn: 'root' })
export class OrderItemQuery extends QueryEntity<OrderItemState> {

  constructor(protected store: OrderItemStore) {
    super(store);
  }

}
