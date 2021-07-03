import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrderItemStore } from './order-item.store';

@Injectable({ providedIn: 'root' })
export class OrderItemService {

  constructor(private orderItemStore: OrderItemStore, private http: HttpClient) {
  }

  get() {
    return this.http.get('').pipe(tap(entities => this.orderItemStore.set(entities)));
  }

}
