import { Component, Input, Output, EventEmitter } from '@angular/core';

//data
import { Category } from '../interface/category';

//service
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

  constructor(private catrgoryService: CategoryService) {}

  getCategoryFromCateService(): void {
    this.categorys = this.catrgoryService.getCategory();
  }

  ngOnInit() {
    this.getCategoryFromCateService();
  }
  selectedCategory: Category = this.catrgoryService.getCategory()[0];

  onSelect(category: Category): void {
    this.selectedCategory = category;
    this.categorySelected.emit(category.value);
  }
}
