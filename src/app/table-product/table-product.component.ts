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

  total_pages: number = 0;
  total_product: number = 0;

  ngOnInit() {
    this.productList = filterData(
      this.active,
      this.inActive,
      this.category,
      this.pageIndex,
      this.limit
    ).data;
    this.total_pages = filterData(
      this.active,
      this.inActive,
      this.category,
      this.pageIndex,
      this.limit
    ).total_pages;
    this.total_product = filterData(
      this.active,
      this.inActive,
      this.category,
      this.pageIndex,
      this.limit
    ).total_product;
    this.dataService.total_Product.next(this.total_product);
    this.dataService.total_Pages.next(this.total_pages);
    console.log('total_pages: ', this.total_pages);

    this.dataService.active.subscribe((value) => {
      this.active = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).data;
      this.total_pages = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).total_pages;
      this.total_product = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).total_product;
      this.dataService.total_Product.next(this.total_product);
      this.dataService.total_Pages.next(this.total_pages);
    });

    this.dataService.inActive.subscribe((value) => {
      this.inActive = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).data;
      this.total_pages = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).total_pages;
      this.total_product = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).total_product;
      this.dataService.total_Product.next(this.total_product);
      this.dataService.total_Pages.next(this.total_pages);
    });

    this.dataService.category.subscribe((value) => {
      this.category = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).data;
      this.total_pages = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).total_pages;
      this.total_product = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).total_product;
      this.dataService.total_Product.next(this.total_product);
      this.dataService.total_Pages.next(this.total_pages);
    });

    this.dataService.pageIndex.subscribe((value) => {
      this.pageIndex = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).data;
      this.total_pages = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).total_pages;
      this.total_product = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.limit
      ).total_product;
      this.dataService.total_Product.next(this.total_product);
      this.dataService.total_Pages.next(this.total_pages);
    });
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
