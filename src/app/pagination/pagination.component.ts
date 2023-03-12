import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  ngOnInit() {}
  selected = 'option2';

  currentPage: number = 1;

  pages = Array.from({ length: 4 }, (_, i) => i + 1);

  setCurrentPage(page: number) {
    this.currentPage = page;
  }
}
