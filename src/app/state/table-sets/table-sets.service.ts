import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@env/environment';
import { TableSet, TableSets } from './table-sets.model';
import { TableSetsStore, TableSetsState } from './table-sets.store';

@Injectable({ providedIn: 'root' })
export class TableSetsService {
  constructor(protected store: TableSetsStore, private http: HttpClient) {}

  async getAllTableSets(companyId: number) {
    this.store.setLoading(true);
    const url: string = `${environment.baseUrl}/api/table-sets/getTableSets/${companyId}`;
    this.http.get(url).subscribe((tableSets: TableSets) => {
      // console.log(tableSets);
      this.store.add(tableSets);
      // console.log(this.store.getValue());
    });
    this.store.setLoading(false);
  }

  async orderInit(tableSets: any) {
    this.store.setLoading(true);
    const url: string = `${environment.baseUrl}/api/table-sets/setTableSetsToOccupied`;
    this.http.put(url, tableSets).subscribe((tableSets: TableSets) => {
      // console.log(tableSets);
      this.store.update(tableSets._id, tableSets);
      // console.log(this.store.getValue());
    });
    this.store.setLoading(false);
  }
}
