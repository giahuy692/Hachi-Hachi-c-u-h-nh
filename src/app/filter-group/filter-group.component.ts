import { Component, Input, Output, EventEmitter } from '@angular/core';

//Kendo
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';

//Jquery
import * as $ from 'jquery';

//data
import { Category } from '../interface/category';

//service
import { DataService } from './../service/Data/data.service';
import { CategoryService } from '../service/category/category.service';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss'],
})
export class FilterGroupComponent {
  selectedCategory: Category = this.catrgoryService.getCategory()[0];

  categorys: Category[] = [];

  public items: BreadCrumbItem[] = [
    {
      text: 'CHÍNH SÁCH',
    },
    {
      text: 'COUPON',
    },
    {
      text: 'CHI TIẾT ĐỢT PHÁT HÀNH',
    },
  ];

  public listItems: Array<string> = ['Item 1', 'Item 2', 'Item 3'];

  constructor(
    private catrgoryService: CategoryService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getCategoryFromCateService();
    const selectedCategoryIcon = this.selectedCategory.icon;
    $(document).ready(() => {
      $('#k-6de780b3-67ad-4a67-b80b-1536228bc663 .k-input-value-text').before(
        `<i class="fa-sharp ${selectedCategoryIcon}"></i>`
      );

      $('.btn-5 .k-input-inner span').before(
        "<img src='assets/images/plus.svg' alt='plus' />"
      );
    });
  }
  getCategoryFromCateService(): void {
    this.categorys = this.catrgoryService.getCategory();
  }

  onSelect(category: Category): void {
    console.log(category.value);
    this.selectedCategory = category;
    this.dataService.category.next(category.value);
    this.dataService.pageIndex.next(1);
  }
}
