import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Item } from './item.model';

export interface ItemState extends EntityState<Item> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'item',
  idKey: '_id',
})
export class ItemStore extends EntityStore<ItemState> {
  constructor() {
    super();
  }
}
