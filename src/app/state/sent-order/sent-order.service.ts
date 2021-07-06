import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { tap } from 'rxjs/operators';
import { Order } from '../order';
import { OrderItem } from '../order-item';
import { SentOrdersRaw } from './sent-order.model';
import { SentOrderStore } from './sent-order.store';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class SentOrderService {
  private socket: Socket;

  constructor(
    private sentOrderStore: SentOrderStore,
    private http: HttpClient
  ) {
    this.socket = io(`${environment.baseUrl}`);
  }

  // get() {
  //   return this.http.get('').pipe(tap(entities => this.sentOrderStore.set(entities)));
  // }

  generateSentOrderID() {
    const date = new Date();
    let id = `${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
  }

  // createSentOrder(orderItems: OrderItem[], order: Order) {
  //   const url: string = `${environment.api}/sent-orders/createSentOrders`;
  //   this.http
  //     .post(url, { orderItems: orderItems, order: order })
  //     .subscribe((res) => {});
  // }

  createSentOrders(orderItems: OrderItem[], order: Order) {
    console.log(this.socket);
    let sentOrders: SentOrdersRaw = {
      sentItems: [],
      orderTime: new Date(),
      companyId: order.companyId.toString(),
    };
    orderItems.forEach((i) => {
      sentOrders.sentItems.push({
        ...i,
        companyId: order.companyId.toString(),
      });
    });

    this.socket.emit('new-order', sentOrders);
  }
}
