import { Category } from 'src/app/interface/category';
import { Component, Input } from '@angular/core';

//data
import { Product } from '../interface/product';

// Service
import { DataService, filterData } from './../service/Data/data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss'],
})
export class TableProductComponent {
  constructor(private dataService: DataService) {}
  @Input() productList?: Product[];

  selectedProduct?: Product;

  active: boolean = false;
  inActive: boolean = false;
  category: string = 'product';
  pageIndex: number = 1;
  limit: number = 10;

  textSearch: any = '';
  total_pages: number = 0;
  currentActive: number = 0;
  currentInActive: number = 0;

  ngOnInit() {
    this.productList = filterData(
      this.active,
      this.inActive,
      this.category,
      this.pageIndex,
      this.limit,
      this.textSearch
    ).data;

    this.total_pages = filterData(
      this.active,
      this.inActive,
      this.category,
      this.pageIndex,
      this.limit,
      this.textSearch
    ).total_pages;

    this.currentActive = filterData(
      this.active,
      this.inActive,
      this.category,
      this.pageIndex,
      this.limit,
      this.textSearch
    ).currentActive;

    this.currentInActive = filterData(
      this.active,
      this.inActive,
      this.category,
      this.pageIndex,
      this.limit,
      this.textSearch
    ).currentInActive;

    this.dataService.active.subscribe((value) => {
      this.active = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).data;

      this.total_pages = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).total_pages;
      this.dataService.pageQuality.next(this.total_pages);
    });

    this.dataService.inActive.subscribe((value) => {
      this.inActive = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).data;

      this.total_pages = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).total_pages;
      this.dataService.pageQuality.next(this.total_pages);
    });

    this.dataService.category.subscribe((value) => {
      this.category = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).data;
      this.total_pages = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).total_pages;
      this.currentActive = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).currentActive;

      this.currentInActive = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).currentInActive;
      this.dataService.pageQuality.next(this.total_pages);
      this.dataService.currentActive.next(this.currentActive);
      this.dataService.currentInActive.next(this.currentInActive);
    });

    this.dataService.pageIndex.subscribe((value) => {
      this.pageIndex = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).data;
      this.total_pages = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).total_pages;
      this.dataService.pageQuality.next(this.total_pages);
    });

    this.dataService.textSearch.subscribe((value) => {
      this.textSearch = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).data;
      this.total_pages = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).total_pages;
      this.dataService.pageQuality.next(this.total_pages);
    });

    this.dataService.limit.subscribe((value) => {
      this.limit = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).data;
      this.total_pages = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit,
        this.textSearch
      ).total_pages;
      this.dataService.pageQuality.next(this.total_pages);
    });
  }

  ngAfterViewInit() {
    this.dataService.pageQuality.next(this.total_pages);
    this.dataService.currentActive.next(this.currentActive);
    this.dataService.currentInActive.next(this.currentInActive);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    alert(
      'Tên sản phẩm: ' +
        this.selectedProduct.title +
        ' \nPoscode: ' +
        this.selectedProduct.poscode +
        ' \nBarcode: ' +
        this.selectedProduct.barcode +
        ' \nNgười bán: ' +
        this.selectedProduct.seller +
        ' \nPhân nhóm: ' +
        this.selectedProduct.subgroup +
        ' \nXuất xứ: ' +
        this.selectedProduct.origin +
        ' \nThương hiệu: ' +
        this.selectedProduct.brand +
        ' \nGiá bán lẻ: ' +
        this.selectedProduct.price
    );
  }
}
