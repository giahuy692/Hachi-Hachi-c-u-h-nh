import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Interface
import { Product } from 'src/app/interface/product';

// Data
import { DataProducts } from 'src/app/data/mock-products';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  active = new Subject<any>();
  inActive = new Subject<any>();
  category = new Subject<any>();
  pageIndex = new Subject<any>();
  limit = new Subject<any>();
  textSearch = new Subject<any>();

  total_Product = new Subject<number>();
  total_Pages = new Subject<number>();
}

export function filterData(
  active: boolean,
  inActive: boolean,
  category: string,
  pageIndex: number,
  limit: number
) {
  var data = DataProducts;
  var totalData: number;
  console.log(category, active, inActive);
  if (category != '' && active == false && inActive == false) {
    data = data.filter((item) => item.category == category);
    totalData = data.length;
    console.log(data);
  }

  if (active == true) {
    data = data.filter((item) => {
      return item.status == 'active' && item.category == category;
    });
    totalData = data.length;
    console.log('data dk 2:', data);
    console.log('totalData dk 2:', totalData);
  }

  if (inActive == true) {
    data = data.filter((item) => {
      return item.status == 'inActive' && item.category == category;
    });
    totalData = data.length;
    console.log('data dk 3:', data);
    console.log('totalData dk 3:', totalData);
  }

  if (inActive == true && active == true) {
    data = DataProducts.filter((item) => item.category == category);
    totalData = data.length;
    console.log('data dk 4:', data);
    console.log('totalData dk 4:', totalData);
  }

  const offset = (pageIndex - 1) * limit;
  const dataList = data.slice(offset).slice(0, limit);
  const total_pages = Math.ceil(data.length / limit);

  console.log('data ', data);
  console.log('data ', data);

  return {
    total_product: data.length,
    total_pages: total_pages,
    data: dataList,
  };
}
