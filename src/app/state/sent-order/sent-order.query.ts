import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SentOrderStore, SentOrderState } from './sent-order.store';

@Injectable({ providedIn: 'root' })
export class SentOrderQuery extends QueryEntity<SentOrderState> {

  constructor(protected store: SentOrderStore) {
    super(store);
  }

}
