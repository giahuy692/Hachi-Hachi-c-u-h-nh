import { Component, Input } from '@angular/core';

//data
import { Product } from '../interface/product';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss'],
})
export class TableProductComponent {
  @Input() productList?: Product[];

  selectedProduct?: Product;

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
