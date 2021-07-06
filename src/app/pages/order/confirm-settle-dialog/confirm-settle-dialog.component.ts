import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-settle-dialog',
  templateUrl: './confirm-settle-dialog.component.html',
  styleUrls: ['./confirm-settle-dialog.component.scss'],
})
export class ConfirmSettleDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ConfirmSettleDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public orderItem: Observable<any>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
    // this.snackBar.open('Order Submit!', '', { duration: 1000 });
  }
}
