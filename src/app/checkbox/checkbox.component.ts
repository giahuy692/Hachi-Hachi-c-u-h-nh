import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';

// Interface
import { Product } from '../interface/product';

//Data
import { DataProducts } from '../data/mock-products';

//Service
import { DataService } from './../service/Data/data.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit, AfterViewInit {
  constructor(private dataService: DataService) {}
  data: Product[] = [];
  isActive: boolean = false;
  isInActive: boolean = false;

  currentActive: number = 0;
  currentInActive: number = 0;

  ngOnInit() {
    this.dataService.resetActive.subscribe((item) => (this.isActive = item));
    this.dataService.resetInActive.subscribe(
      (item) => (this.isInActive = item)
    );
  }

  ngAfterViewInit() {
    this.dataService.currentActive.subscribe(
      (item) => (this.currentActive = item)
    );
    this.dataService.currentInActive.subscribe(
      (item) => (this.currentInActive = item)
    );
  }

  onCheckActiveChange() {
    this.dataService.active.next(this.isActive);
  }

  onCheckInActiveChange() {
    this.dataService.inActive.next(this.isInActive);
  }
}
