import { OnChanges, OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Item } from '@app/state/item';
import { Order } from '@app/state/order';
import { OrderItem, OrderItemService } from '@app/state/order-item/';
import { OrderComfirmDialogComponent } from './order-comfirm-dialog/order-comfirm-dialog.component';
import { environment } from '@env/environment';
import { SentOrder, SentOrderService } from '@app/state/sent-order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit, OnDestroy, OnChanges {
  subs: Subscription[] = [];
  order: Order;
  items: OrderItem[];
  form: FormGroup;
  orderPrice: number = 0;
  // quantity: FormArray = new FormArray([]);
  dishsFormArray: FormArray = new FormArray([]);
  drinksFormArray: FormArray = new FormArray([]);

  dishDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  drinkDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @ViewChild('dishPaginator') dishPaginator: MatPaginator;
  @ViewChild('drinkPaginator') drinkPaginator: MatPaginator;

  //test
  testDataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  testDisplayedColumns: string[] = ['Test'];
  testForm: FormGroup = this._formBuilder.group({
    test: this._formBuilder.array([]),
  });

  displayedColumns: string[] = [
    'image',
    'name',
    'description',
    'price',
    'quantity',
    'action',
  ];

  constructor(
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private orderItemSer: OrderItemService,
    private sentOrderSer: SentOrderService
  ) {}

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
        this.order.items.forEach((i) => {
          this.orderPrice += i.price * i.quantity;
        });
        data.result.items.forEach((i) => {
          if (i.type === 'Dish') {
            this.dishsFormArray.push(
              this._formBuilder.group({
                _id: i._id,
                image: i.image,
                name: i.name,
                description: i.description,
                available: i.available,
                price: i.price,
                companyId: i.companyId,
                quantity: new FormControl('0'),
                type: i.type,
              })
            );
          } else if (i.type === 'Drink') {
            this.drinksFormArray.push(
              this._formBuilder.group({
                _id: i._id,
                image: i.image,
                name: i.name,
                description: i.description,
                available: i.available,
                price: i.price,
                companyId: i.companyId,
                quantity: new FormControl('0'),
                type: i.type,
              })
            );
          }
        });
      }
    });
    this.parseItem();
  }

  ngOnChanges() {
    this.subscribe(this.route.data, (data) => {
      if (data) {
        this.order = data.result.order;
        this.order = data.result.order;
        this.order.items.forEach((i) => {
          this.orderPrice += i.price * i.quantity;
        });
        data.result.items.forEach((i) => {
          if (i.type === 'Dish') {
            this.dishsFormArray.push(
              this._formBuilder.group({
                _id: i._id,
                image: i.image,
                name: i.name,
                description: i.description,
                available: i.available,
                price: i.price,
                companyId: i.companyId,
                quantity: new FormControl('0'),
                type: i.type,
                action: '',
              })
            );
          } else if (i.type === 'Drink') {
            this.drinksFormArray.push(
              this._formBuilder.group({
                _id: i._id,
                image: i.image,
                name: i.name,
                description: i.description,
                available: i.available,
                price: i.price,
                companyId: i.companyId,
                quantity: new FormControl('0'),
                type: i.type,
                action: '',
              })
            );
          }
        });
      }
    });
    this.parseItem();
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  parseItem() {
    this.drinkDataSource.data = [];
    this.dishDataSource.data = [];
    this.drinkDataSource.data = this.drinksFormArray.controls;
    this.dishDataSource.data = this.dishsFormArray.controls;
    this.dishDataSource.paginator = this.dishPaginator;
    this.drinkDataSource.paginator = this.drinkPaginator;
  }

  onPageChanged($event) {}

  resetQuantity(element: FormGroup) {
    element.patchValue({ quantity: 0 });
  }

  resetAllQuantity() {
    this.dishsFormArray.controls.forEach((fg) => {
      fg.patchValue({ quantity: 0 });
    });
    this.drinksFormArray.controls.forEach((fg) => {
      fg.patchValue({ quantity: 0 });
    });
  }

  settlePayment() {}

  onSubmit() {
    const orderItems: OrderItem[] = [];
    this.dishDataSource.data.forEach((d) => {
      if (d.value.quantity > 0) {
        orderItems.push(d.value as OrderItem);
      }
    });
    this.drinkDataSource.data.forEach((d) => {
      if (d.value.quantity > 0) {
        orderItems.push(d.value as OrderItem);
      }
    });
    if (orderItems.length > 0) {
      this.dialog
        .open(OrderComfirmDialogComponent, {
          data: orderItems,
        })
        .afterClosed()
        .subscribe((confirmed) => {
          if (confirmed) {
            this.orderItemSer.addOrderItems(orderItems, this.order);
            this.sentOrderSer.createSentOrders(orderItems, this.order);
            this.resetAllQuantity();
            this.orderPrice = 0;
            this.order.items.forEach((i) => {
              this.orderPrice += i.price * i.quantity;
            });

            //socket.io
            // const sentOrderArr: SentOrder[] = [];
            // orderItems.forEach(o => {
            //   sentOrderArr.push({...o, sentOrder_id: this.})
            // })
          }
        });
    }
  }
}
