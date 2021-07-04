import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { OrderComponent } from '../order.component';

@Component({
  selector: 'app-order-comfirm-dialog',
  templateUrl: './order-comfirm-dialog.component.html',
  styleUrls: ['./order-comfirm-dialog.component.scss'],
})
export class OrderComfirmDialogComponent implements OnInit {
  orderItemDataSource: MatTableDataSource<any> = new MatTableDataSource<any>(
    []
  );
  displayedColumns: string[] = ['index', 'name', 'price', 'quantity'];

  constructor(
    private dialogRef: MatDialogRef<OrderComfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public orderItem: Observable<any>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.orderItemDataSource.data = this.orderItem as any;
  }

  onClose(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
