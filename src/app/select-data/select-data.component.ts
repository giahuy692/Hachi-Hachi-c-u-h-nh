import { DataService } from './../service/Data/data.service';
import { ProductService } from './../service/product/product.service';
import { Component } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-select-data',
  templateUrl: './select-data.component.html',
  styleUrls: ['./select-data.component.scss'],
})
export class SelectDataComponent {
  textSearch: string = '';
  faSearch = faSearch;

  constructor(private dataService: DataService) {}

  handleReset() {
    this.dataService.active.next(true);
    this.dataService.pageIndex.next(1);
    this.dataService.resetActive.next(true);
    this.dataService.resetInActive.next(false);
  }

  handleSearch() {
    this.dataService.textSearch.next(this.textSearch);
    this.dataService.pageIndex.next(1);
  }

  onKeyUp(event: any) {
    if (event.target.value === '') {
      this.dataService.textSearch.next((this.textSearch = ''));
      this.dataService.pageIndex.next(1);
    }
  }
}
