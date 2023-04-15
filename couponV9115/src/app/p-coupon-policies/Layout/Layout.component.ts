import { Component, OnInit } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-Layout',
  templateUrl: './Layout.component.html',
  styleUrls: ['./Layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public selected = 'Inbox';

  public items: Array<DrawerItem> = [
    { text: 'KHUYẾN MÃI', icon: 'k-i-overlap', selected: true },
    { separator: true },
    { text: 'NỘI DUNG WEBSITE', icon: 'k-i-overlap' },
    { text: 'QUẢN LÝ BANNER', icon: 'k-i-overlap' },
    { separator: true },
    { text: 'CHÍNH SÁCH', icon: 'k-i-overlap' },
    { text: 'BÁO CÁO EXCEL', icon: 'k-i-overlap' },
  ];

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }

  constructor() {}

  ngOnInit() {}
}
