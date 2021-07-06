import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TableSets } from './table-sets.model';

export interface TableSetsState extends EntityState<TableSets> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'table-sets',
  idKey: '_id',
})
export class TableSetsStore extends EntityStore<TableSetsState> {
  constructor() {
    super();
  }
}
