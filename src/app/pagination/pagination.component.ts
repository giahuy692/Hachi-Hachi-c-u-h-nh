import { ProductService } from './../service/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  constructor(private productService: ProductService) {}
  ngOnInit() {}

  limits: number[] = [10, 20, 50];
  selectedValue: number = 10;

  currentPage: number = 1;

  pages = Array.from({ length: 4 }, (_, i) => i + 1);

  setLimit(limit: number) {
    this.productService.filters.limit = limit;
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
    this.productService.filters.page = page;
  }
}
