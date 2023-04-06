import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Interface
import { ProductList } from 'src/app/interface/product';

// Data
import { DataProducts } from 'src/app/data/mock-products';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit {
  Data = new Subject<any>();
  active = new Subject<any>();
  inActive = new Subject<any>();
  category = new Subject<any>();
  pageIndex = new Subject<any>();
  limit = new Subject<any>();
  textSearch = new Subject<any>();
  resetActive = new Subject<boolean>();
  resetInActive = new Subject<boolean>();

  pageQuality = new Subject<number>();
  currentActive = new Subject<number>();
  currentInActive = new Subject<number>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.Data.next(DataProducts);
  }

  ngAfterViewInit() {}

  getDataApi(): Observable<ProductList> {
    return this.http.post<ProductList>(
      'http://test.lapson.vn/api/product/GetListProduct',
      {}
    );
  }
}

export function filterData(
  active: boolean,
  inActive: boolean,
  category: string,
  pageIndex: number,
  // limit: number,
  textSearch: any
) {
  var data = DataProducts;
  var totalData: number;
  if (category != '' && active == false && inActive == false) {
    data = data.filter((item) => item.category == category);
    totalData = data.length;
  }

  if (active == true) {
    data = data.filter((item) => {
      return item.status == 'active' && item.category == category;
    });
    totalData = data.length;
  }

  if (textSearch !== '') {
    data = data.filter((item) => {
      return (
        item.title.toLocaleLowerCase().includes(textSearch) ||
        item.origin.toLocaleLowerCase().includes(textSearch) ||
        item.poscode.toString().includes(textSearch) ||
        item.barcode.toString().includes(textSearch) ||
        item.brand.toLocaleLowerCase().includes(textSearch) ||
        item.price.toString().includes(textSearch) ||
        item.seller.toLocaleLowerCase().includes(textSearch) ||
        item.subgroup.includes(textSearch)
      );
    });
  }

  if (inActive == true) {
    data = data.filter((item) => {
      return item.status == 'inActive' && item.category == category;
    });
    totalData = data.length;
  }

  if (inActive == true && active == true) {
    data = DataProducts.filter((item) => item.category == category);
    totalData = data.length;
  }

  // const offset = (pageIndex - 1) * limit;
  // const dataList = data.slice(offset).slice(0, limit);
  // const total_pages = Math.ceil(data.length / limit);
  const currentActive = DataProducts.filter(
    (item) => item.category == category && item.status == 'active'
  ).length;
  const currentInActive = DataProducts.filter(
    (item) => item.category == category && item.status == 'inActive'
  ).length;

  return {
    total_product: data.length,
    // total_pages: total_pages,
    data: data,
    currentActive: currentActive,
    currentInActive: currentInActive,
  };
}
