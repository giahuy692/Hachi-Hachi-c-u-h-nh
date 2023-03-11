import { ProductService } from './../service/product/product.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-select-data',
  templateUrl: './select-data.component.html',
  styleUrls: ['./select-data.component.scss'],
})
export class SelectDataComponent {
  private searchTerms = new Subject<string>();

  constructor(private productService: ProductService) {}

  textSearch: string = '';
  faSearch = faSearch;

  search(): void {
    this.productService.setSearch(this.searchTerms.next(this.textSearch));
  }
}
