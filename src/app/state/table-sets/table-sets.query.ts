import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TableSetsStore, TableSetsState } from './table-sets.store';

@Injectable({ providedIn: 'root' })
export class TableSetsQuery extends QueryEntity<TableSetsState> {
  constructor(protected store: TableSetsStore) {
    super(store);
  }

  getTableSets$ = this.selectAll();
}
