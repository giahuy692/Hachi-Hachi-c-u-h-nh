import { ProductService } from './../service/product/product.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  constructor(private productService: ProductService) {}

  isActive: boolean = false;
  isInActive: boolean = false;

  onCheckActiveChange() {
    this.productService.setCheckActiveValue(this.isActive);
    console.log('checkbox active check_co: ', this.isActive);
  }

  onCheckInActiveChange() {
    this.productService.setCheckInActiveValue(this.isInActive);
    console.log('checkbox inactive check_co: ', this.isInActive);
  }
}
