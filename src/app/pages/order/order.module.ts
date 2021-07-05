import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { OrderComfirmDialogComponent } from './order-comfirm-dialog/order-comfirm-dialog.component';
import { environment } from '@env/environment';

@Injectable()
class OrderGuard implements CanActivate {
  url: string = environment.api;
  constructor(private http: HttpClient) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const { accessCode } = next.queryParams;
    if (accessCode) {
      return this.http
        .get<any>(`${this.url}/extra/order`, {
          params: { accessCode },
        })
        .toPromise()
        .then((result) => {
          next.data = { ...next.data, result };
          return true;
        })
        .catch((err) => {
          alert(err.error.message);
          return false;
        });
    }
    alert('Please input access code');
    return false;
  }
}

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    canActivate: [OrderGuard],
  },
];

@NgModule({
  declarations: [OrderComponent, OrderComfirmDialogComponent],
  imports: [
    MatCardModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [OrderGuard],
})
export class OrderModule {}
