import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { tap } from 'rxjs/operators';
import { TableSets, TableSetsStore } from '../table-sets';
import { OrderHistory } from './order-history.model';
import { OrderHistoryStore } from './order-history.store';

@Injectable({ providedIn: 'root' })
export class OrderHistoryService {
  constructor(
    private orderHistoryStore: OrderHistoryStore,
    private tableSetsStore: TableSetsStore,
    private http: HttpClient
  ) {}

  async createOrderHistory(orderHistory: OrderHistory) {
    const url: string = `${environment.api}/order-history/createOrderHistory`;
    this.http.post(url, orderHistory).subscribe((tableSets: TableSets) => {
      this.tableSetsStore.update({ _id: tableSets._id });
    });
  }
}
