import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ItemStore } from './item.store';

@Injectable({ providedIn: 'root' })
export class ItemService {
  constructor(private itemStore: ItemStore, private http: HttpClient) {}

  // get() {
  //   return this.http.get('').pipe(tap(entities => this.itemStore.set(entities)));
  // }
}
