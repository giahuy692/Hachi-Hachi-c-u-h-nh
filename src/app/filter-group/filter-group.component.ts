import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  isActive: boolean = false;
  isInActive: boolean = false;
  @Output() categorySelected = new EventEmitter<string>();

  categorys: Category[] = [];

  constructor(
    private catrgoryService: CategoryService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getCategoryFromCateService();
  }
  getCategoryFromCateService(): void {
    this.categorys = this.catrgoryService.getCategory();
  }

  selectedCategory: Category = this.catrgoryService.getCategory()[0];

  onSelect(category: Category): void {
    console.log(category.value);
    this.selectedCategory = category;
    this.dataService.category.next(category.value);
    this.dataService.pageIndex.next(1);
  }
}
