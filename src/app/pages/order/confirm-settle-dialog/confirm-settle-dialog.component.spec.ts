import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSettleDialogComponent } from './confirm-settle-dialog.component';

describe('ConfirmSettleDialogComponent', () => {
  let component: ConfirmSettleDialogComponent;
  let fixture: ComponentFixture<ConfirmSettleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSettleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSettleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
