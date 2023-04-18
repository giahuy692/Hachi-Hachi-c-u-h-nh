import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

//Kendo
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';

//Jquery
import * as $ from 'jquery';

//DTO
import { Category } from 'src/app/DTO';

@Component({
  selector: 'app-p-tool-groups',
  templateUrl: './p-tool-groups.component.html',
  styleUrls: ['./p-tool-groups.component.scss'],
})
export class PToolGroupsComponent implements OnInit {
  categorys: Category[] = [];

  public items: BreadCrumbItem[] = [
    {
      text: 'CHÍNH SÁCH',
    },
    {
      text: 'COUPON',
    },
    {
      text: 'CHI TIẾT ĐỢT PHÁT HÀNH',
    },
  ];

  public listItems: Array<string> = ['Item 1', 'Item 2', 'Item 3'];

  constructor() {}

  ngOnInit() {
    $(document).ready(() => {
      $('.btn-5 .k-input-inner span').before(
        "<img src='assets/images/plus.svg' alt='plus' />"
      );
    });
  }
}
