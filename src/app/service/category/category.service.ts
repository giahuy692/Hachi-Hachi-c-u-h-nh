import { Injectable } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { DataCategorys } from 'src/app/data/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getCategory(): Category[] {
    return DataCategorys;
  }
}
