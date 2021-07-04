import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrderItem } from './order-item.model';
import { OrderItemStore } from './order-item.store';
import { environment } from '@env/environment';
import { Order } from '../order/order.model';

@Injectable({ providedIn: 'root' })
export class OrderItemService {
  constructor(
    private orderItemStore: OrderItemStore,
    private http: HttpClient
  ) {}

  // get() {
  //   return this.http.get('').pipe(tap(entities => this.orderItemStore.set(entities)));
  // }

  addOrderItems(orderItem: OrderItem[], order: Order) {
    orderItem.forEach((i) => {
      order.items.push(i);
    });

    const url: string = `${environment.api}/order/addOrderItem`;
    // console.log(orderItem);
    // const body = { orderItem: orderItem, order: order };
    this.http.put(url, order).subscribe((order) => {
      console.log(order);
    });
  }
}
