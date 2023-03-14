import { ProductService } from './../service/product/product.service';
import { Component } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-select-data',
  templateUrl: './select-data.component.html',
  styleUrls: ['./select-data.component.scss'],
})
export class SelectDataComponent {
  private searchTerms = new Subject<string>();
  textSearch = new Observable<Product[]>();

  constructor(private productService: ProductService) {}

  faSearch = faSearch;
}
