import { CategoryService } from './../service/category/category.service';
import { ProductService } from './../service/product/product.service';
import { Component, Input } from '@angular/core';

//data
import { Product } from '../interface/product';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss'],
})
export class TableProductComponent {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}
  @Input() productList?: Product[];

  selectedProduct?: Product;

  // get filters() {
  //   console.log('Table: ', this.productService.filters);
  //   return this.productService.filters; // Lấy giá trị của biến filters từ service
  // }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    alert(
      'Tên sản phẩm: ' +
        this.selectedProduct.title +
        ' \nPoscode: ' +
        this.selectedProduct.poscode +
        ' \nBarcode: ' +
        this.selectedProduct.barcode +
        ' \nNgười bán: ' +
        this.selectedProduct.seller +
        ' \nPhân nhóm: ' +
        this.selectedProduct.subgroup +
        ' \nXuất xứ: ' +
        this.selectedProduct.origin +
        ' \nThương hiệu: ' +
        this.selectedProduct.brand +
        ' \nGiá bán lẻ: ' +
        this.selectedProduct.price
    );
  }
}
