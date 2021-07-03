import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComfirmDialogComponent } from './order-comfirm-dialog.component';

describe('OrderComfirmDialogComponent', () => {
  let component: OrderComfirmDialogComponent;
  let fixture: ComponentFixture<OrderComfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderComfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
