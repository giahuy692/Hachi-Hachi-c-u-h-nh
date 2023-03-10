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
}
