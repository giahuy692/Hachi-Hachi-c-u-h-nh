import { ProductService } from './../service/product/product.service';
import { Component, OnInit } from '@angular/core';

//Jquery

import * as $ from 'jquery'; //2h46

//data
import { Product } from '../interface/product';

// Service
import { DataService, filterData } from './../service/Data/data.service';

//kendo
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss'],
})
export class TableProductComponent implements OnInit {
  constructor(private dataService: DataService) {
    this.loadItems();
  }

  ngOnInit() {
    $(document).ready(function () {
      // Runs after the DOM is loaded.
      console.log('DOM fully loaded!');
      $('.k-pager-first').html('<span>Đầu</span>');
      $('.k-pager-last').html('<span>Cuối</span>');
      $('.pageSize .k-label').html('<span>Hiển thị mỗi trang</span>');
      $('.k_prev button:nth-child(2)').html(
        '<img src="assets/images/chevronleft.svg" alt="chevronleft">'
      );
      $('.k_next button:nth-child(1)').html(
        '<img src="assets/images/chevronright.svg" alt="chevronright">'
      );
      $('.k-input-value-text').css({ color: '#26282E' });
      $('.k-pager-first, .k-pager-last').css({
        width: '45px',
        height: '29px',
        'border-radius': '3px',
        'font-weight': '400',
        'font-size': '13px',
        color: '#959db3',
      });
    });

    this.productList = filterData(
      this.active,
      this.inActive,
      this.category,
      this.pageIndex,
      this.textSearch
    ).data;

    this.currentActive = filterData(
      this.active,
      this.inActive,
      this.category,
      this.pageIndex,
      this.textSearch
    ).currentActive;
    this.currentInActive = filterData(
      this.active,
      this.inActive,
      this.category,
      this.pageIndex,
      this.textSearch
    ).currentInActive;

    this.dataService.active.subscribe((value) => {
      this.active = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.textSearch
      ).data;
    });
    this.dataService.inActive.subscribe((value) => {
      this.inActive = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.textSearch
      ).data;
    });
    this.dataService.category.subscribe((value) => {
      this.category = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.textSearch
      ).data;

      this.currentActive = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.textSearch
      ).currentActive;
      this.currentInActive = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.textSearch
      ).currentInActive;
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
        this.textSearch
      ).data;
    });
    this.dataService.textSearch.subscribe((value) => {
      this.textSearch = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.textSearch
      ).data;
    });
    this.dataService.limit.subscribe((value) => {
      this.limit = value;
      this.productList = filterData(
        this.active,
        this.inActive,
        this.category,
        this.pageIndex,
        this.textSearch
      ).data;
    });
  }

  productList: Product[] = [];

  public gridView: GridDataResult = { data: [], total: 0 };
  active: boolean = false;
  inActive: boolean = false;
  category: string = 'product';
  pageIndex: number = 1;
  skip: number = 0;
  limit: number = 10;
  limits: number[] = [10, 20, 50];
  selectedValue: number = 10;
  currentPage: number = 1;
  total_Pages: number = 0;
  public buttonCount = 4;

  textSearch: any = '';
  total_pages: number = 0;
  currentActive: number = 0;
  currentInActive: number = 0;

  ngAfterViewInit() {
    this.dataService.pageQuality.next(this.total_pages);
    this.dataService.currentActive.next(this.currentActive);
    this.dataService.currentInActive.next(this.currentInActive);
  }
  onButtonClickViewDetail(dataItem: any): void {
    alert(
      'Tên sản phẩm: ' +
        dataItem.title +
        ' \nPoscode: ' +
        dataItem.poscode +
        ' \nBarcode: ' +
        dataItem.barcode +
        ' \nNgười bán: ' +
        dataItem.seller +
        ' \nPhân nhóm: ' +
        dataItem.subgroup +
        ' \nXuất xứ: ' +
        dataItem.origin +
        ' \nThương hiệu: ' +
        dataItem.brand +
        ' \nGiá bán lẻ: ' +
        dataItem.price
    );
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: this.productList.slice(this.skip, this.skip + this.limit),
      total: this.productList.length,
    };
  }

  // onChecked(dataItem: any): void {
  //   console.log(dataItem);
  // }
}
