import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrderStore } from './order.store';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private orderStore: OrderStore, private http: HttpClient) {}

  // get() {
  //   return this.http.get('').pipe(tap(entities => this.orderStore.set(entities)));
  // }

  addItems() {}
}
