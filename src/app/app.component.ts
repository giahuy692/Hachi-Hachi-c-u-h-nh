import { Subject } from 'rxjs';
import { Component, Pipe, PipeTransform } from '@angular/core';
//data
// import { DataProducts } from './data/mock-products';
import { Product } from './interface/product';

//service
import { ProductService } from './service/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filters = [
    {
      field: 'category',
      value: 'product',
      operator: 'like',
    },
  ];

  ngOnInit() {
    this.getProductFromService();
  }

  // ----------------------------
  title = 'Cấu hình';
  products: Product[] = [];
  category: string = '';

  //-----------------------------

  constructor(private productService: ProductService) {}

  getProductFromService(): void {
    this.productService
      .getProduct()
      .subscribe((productlist) => (this.products = productlist));
  }

  clickSelected(category: string) {
    this.category = category;
    console.log('category nhan duoc tu child: ', category);
  }
}
