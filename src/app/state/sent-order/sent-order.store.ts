import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { SentOrder } from './sent-order.model';

export interface SentOrderState extends EntityState<SentOrder> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'sent-order'
})
export class SentOrderStore extends EntityStore<SentOrderState> {

  constructor() {
    super();
  }

}
