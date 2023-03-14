import { Component, OnInit } from '@angular/core';

// service
import { DataService } from './../service/Data/data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  constructor(private dataService: DataService) {}

  limits: number[] = [10, 20, 50];
  selectedValue: number = 10;

  currentPage: number = 1;

  total_Product: number = 0;
  total_Pages: number = 0;

  pages = Array.from({ length: this.total_Pages }, (_, i) => i + 1);

  ngOnInit() {
    this.dataService.total_Product.subscribe((item) => {
      this.total_Product = item;
      console.log('total_product', item);
    });
    this.dataService.total_Pages.subscribe((item) => {
      this.total_Pages = item;
      console.log('total_Pages', item);
    });
  }

  setLimit(limit: number) {
    this.dataService.limit.next(limit);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
    this.dataService.pageIndex.next(page);
  }
}
