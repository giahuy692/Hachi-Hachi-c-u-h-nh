import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from 'src/app/interface/product';
import { DataProducts } from 'src/app/data/mock-products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProduct(): Observable<Product[]> {
    const productList = of(DataProducts);
    return productList;
  }

  // getSelectedProduct(): Observable<Product[]> {
  //   DataProducts.
  //   const productlist = of()
  // }
}
