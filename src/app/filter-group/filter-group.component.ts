import { CategoryService } from './../service/category/category.service';
import { ProductService } from './../service/product/product.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

//data
import { Category } from '../interface/category';

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
  selectedCategory: Category = new Category(); // = this.catrgoryService.getCategory()[0];

  constructor(
    private catrgoryService: CategoryService,
    private productService: ProductService
  ) {}

  getCategoryFromCateService(): void {
    this.categorys = this.catrgoryService.getCategory();
  }

  ngOnInit() {
    this.getCategoryFromCateService();
    this.selectedCategory = this.catrgoryService.getCategory()[0];

    this.catrgoryService.getCategoryChange().subscribe(
      (s) => {
        console.log(this.categorys, s, this.selectedCategory);
        this.selectedCategory = { ...s };
        //this.categorys.find((f) => f.value == s.value) || new Category();
      },
      (e) => console.log('e', e)
    );
  }

  onSelect(category: Category): void {
    //this.selectedCategory = category;
    //console.log(this.selectedCategory.viewValue);
    this.catrgoryService.setCategorychange(category);
    //this.productService.filters.category = category.value;
    // console.log(this.selectedCategory);
    // console.log('default', this.catrgoryService.getCategory()[0]);
    // // this.categorySelected.emit(category.value);
  }
}
