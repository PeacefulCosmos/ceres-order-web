import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { OrderItem } from './order-item.model';

export interface OrderItemState extends EntityState<OrderItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'order-item'
})
export class OrderItemStore extends EntityStore<OrderItemState> {

  constructor() {
    super();
  }

}
