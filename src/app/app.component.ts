import { Component, OnInit, ViewEncapsulation } from '@angular/core';

//data
// import { DataProducts } from './data/mock-products';
import { Product } from './interface/product';

//service
import { CategoryService } from './service/category/category.service';
import { ProductService } from './service/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  filters = [
    {
      field: 'category',
      value: 'product',
      operator: 'like',
    },
  ];

  // ----------------------------
  title = 'Cấu hình';
  products: Product[] = [];
  setCategory: string = '';

  isActive: boolean = false;
  isInActive: boolean = false;

  textSearch: string = '';

  totalProduct: number = 0;

  //-----------------------------

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProduct()
      .subscribe((productlist) => (this.products = productlist));

    this.productService.getCheckActiveValue().subscribe((value) => {
      this.isActive = value;
    });

    this.productService.getCheckInActiveValue().subscribe((value) => {
      this.isInActive = value;
    });

    this.getProductFromService();
  }

  getProductFromService(): void {
    this.totalProduct = this.products.length;
  }
}
