import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/state/item';
import { Order } from 'src/app/state/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  order: Order;
  items: Item[];

  dishDataSource: MatTableDataSource<Item> = new MatTableDataSource<Item>([]);
  drinkDataSource: MatTableDataSource<Item> = new MatTableDataSource<Item>([]);
  displayedColumns: string[] = [
    'image',
    'name',
    'description',
    'price',
    'quantity',
    'action',
  ];

  constructor(private route: ActivatedRoute) {}

  subscribe(observer: Observable<any>, callback: (...args: any) => void): void {
    this.subs.push(observer.subscribe(callback));
  }

  unsubscribe(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.subscribe(this.route.data, (data) => {
      if (data) {
        this.order = data.result.order;
        this.items = data.result.items;
        this.parseItem();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  parseItem() {
    this.drinkDataSource.data = [];
    this.dishDataSource.data = [];
    this.items.forEach((i) => {
      if (i.type === 'Dish') {
        this.dishDataSource.data.push(i);
      } else if (i.type === 'Drink') {
        this.drinkDataSource.data.push(i);
      }
    });
  }
}
