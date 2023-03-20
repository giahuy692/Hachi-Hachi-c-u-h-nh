import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

// service
import { DataService } from './../service/Data/data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  constructor(
    private dataService: DataService,
    private cdRef: ChangeDetectorRef
  ) {}

  limits: number[] = [10, 20, 50];
  selectedValue: number = 10;

  currentPage: number = 1;

  total_Pages: number = 0;

  public buttonCount = 4;

  pages: number[] = [];

  ngOnInit() {
    this.cdRef.detectChanges(); // thông báo cho Angular cập nhật lại giá trị

    this.dataService.pageQuality.subscribe((item) => {
      this.pages = Array.from({ length: item }, (_, i) => i + 1);
    });

    this.dataService.pageIndex.subscribe((item) => {
      this.currentPage = item;
    });
  }

  setLimit(limit: number) {
    this.dataService.limit.next(limit);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
    this.dataService.pageIndex.next(page);
  }

  clickFirst() {
    this.currentPage = 1;
    this.dataService.pageIndex.next(1);
  }

  clickLast() {
    this.currentPage = this.pages[this.pages.length - 1];
    this.dataService.pageIndex.next(this.pages.pop());
  }

  clickPrev() {
    if (this.currentPage == 1) {
      this.currentPage = 1;
      this.dataService.pageIndex.next(this.currentPage);
    } else {
      this.currentPage = this.currentPage - 1;
      this.dataService.pageIndex.next(this.currentPage);
    }
  }
  clickNext() {
    if (this.currentPage == this.pages[this.pages.length - 1]) {
      this.currentPage = this.pages[this.pages.length - 1];
      this.dataService.pageIndex.next(this.currentPage);
      console.log('currentPage', this.currentPage);
      console.log('selectedValue', this.currentPage);
    } else {
      this.currentPage = this.currentPage + 1;
      this.dataService.pageIndex.next(this.currentPage);
      // console.log('currentPage', this.currentPage);
      // console.log('selectedValue', this.currentPage);
    }
  }
}
