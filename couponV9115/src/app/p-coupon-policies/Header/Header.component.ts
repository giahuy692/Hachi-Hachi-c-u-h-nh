import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  NavItems = [
    { text: 'CẤU HÌNH', selected: true },
    { text: 'MUA HÀNG' },
    { text: 'KHO HÀNG' },
    { text: 'ĐIỀU PHỐI' },
    { text: 'MARKETING' },
    { text: 'E-COMMERCE' },
    { text: 'KINH DOANH' },
    { text: 'NHÂN SỰ' },
    { text: 'BÁO CÁO' },
  ];

  ngOnInit() {}
}
