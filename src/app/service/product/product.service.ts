import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { Product } from 'src/app/interface/product';
import { DataProducts } from 'src/app/data/mock-products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  private checkActiveValue = new BehaviorSubject<boolean>(false);
  private checkInActiveValue = new BehaviorSubject<boolean>(false);
  private textSearch = new BehaviorSubject<any>('');

  filters: any = {
    category: 'product',
    limit: 10,
    page: 1,
    active: false,
    inActive: false,
    toltal: 0,
  };

  filterProduct() {}

  getProduct(): Observable<Product[]> {
    const productList = of(DataProducts);
    console.log('Product service: ', this.filters);

    return productList;
  }
  getCheckActiveValue() {
    return this.checkActiveValue.asObservable();
  }

  setCheckActiveValue(value: boolean) {
    this.checkActiveValue.next(value);
  }

  getCheckInActiveValue() {
    return this.checkInActiveValue.asObservable();
  }

  setCheckInActiveValue(value: boolean) {
    this.checkInActiveValue.next(value);
  }

  setSearch(value: any) {
    this.textSearch.next(value);
  }

  getTextSearch() {
    return this.textSearch.asObservable();
  }
}
