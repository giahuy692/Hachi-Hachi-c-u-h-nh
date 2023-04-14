import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  NavItems = [
    'CẤU HÌNH',
    'MUA HÀNG',
    'KHO HÀNG',
    'ĐIỀU PHỐI',
    'MARKETING',
    'E-COMMERCE',
    'KINH DOANH',
    'NHÂN SỰ',
    'BÁO CÁO',
  ];

  ngOnInit() {}
}
