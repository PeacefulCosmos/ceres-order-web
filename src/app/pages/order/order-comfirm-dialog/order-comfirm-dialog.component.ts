import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { OrderComponent } from '../order.component';

@Component({
  selector: 'app-order-comfirm-dialog',
  templateUrl: './order-comfirm-dialog.component.html',
  styleUrls: ['./order-comfirm-dialog.component.scss'],
})
export class OrderComfirmDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<OrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Observable<any>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
}
