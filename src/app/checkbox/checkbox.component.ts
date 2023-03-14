import { Component } from '@angular/core';

// Interface
import { Product } from '../interface/product';

//Service
import { DataService } from './../service/Data/data.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  constructor(private dataService: DataService) {}
  data: Product[] = [];
  isActive: boolean = false;
  isInActive: boolean = false;

  onCheckActiveChange() {
    console.log(this.isActive);
    this.dataService.active.next(this.isActive);

    // this.productService.filters.active = this.isActive;
    // this.productService.setCheckActiveValue(this.isActive);
    // console.log('checkbox active check_co: ', this.isActive);
  }

  onCheckInActiveChange() {
    console.log(this.isInActive);
    this.dataService.inActive.next(this.isInActive);
    // this.productService.filters.inActive = this.isInActive;
    // this.productService.setCheckInActiveValue(this.isInActive);
    // console.log('checkbox inactive check_co: ', this.isInActive);
  }
}
