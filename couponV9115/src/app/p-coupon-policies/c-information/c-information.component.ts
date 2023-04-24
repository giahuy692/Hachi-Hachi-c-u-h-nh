import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-c-information',
  templateUrl: './c-information.component.html',
  styleUrls: ['./c-information.component.scss'],
})
export class CInformationComponent implements OnInit {
  titles = [
    'Mã bắt đầu coupon',
    'SL phát hành',
    'Tên coupon',
    'Mã coupon ngẫu nhiên gấp (x) lần',
    'Mô tả điều kiện áp dụng',
    'Giá trị coupon',
    'tỷ lệ %',
    'Diễn giải',
    'Thời gian hiệu lực',
    'Tình trạng',
  ];

  isVi: boolean = false;
  isJa: boolean = true;
  isEn: boolean = true;

  ProductNameVi: string = '';
  ProductNameJa: string = '';
  ProductNameEn: string = '';
  ConditionVi: string = '';
  ConditionJa: string = '';
  ConditionEn: string = '';
  DescriptionVi: string = '';
  DescriptionJa: string = '';
  DescriptionEn: string = '';

  // Khởi tạo một đối tượng Date() mới với ngày hiện tại

  ngOnInit() {
    $(document).ready(function () {
      $('.coupon-body kendo-label label').css({
        'margin-bottom': '9px',
        width: '100%',
        overflow: 'hidden',
        'white-space': 'nowrap',
        'text-overflow': 'ellipsis',
        'font-weight': '700',
      });
      $('.coupon-body .k-checkbox').css({ 'margin-bottom': '9px' });
    });

    this.onTranslate('vi');
  }

  public onChangeProductNameVi(value: string): void {
    this.ProductNameVi = value;
  }
  public onChangeProductNameJa(value: string): void {
    this.ProductNameJa = value;
  }
  public onChangeProductNameEn(value: string): void {
    this.ProductNameEn = value;
  }
  public onChangeConditionVi(value: string): void {
    this.ConditionVi = value;
  }
  public onChangeConditionJa(value: string): void {
    this.ConditionJa = value;
  }
  public onChangeConditionEn(value: string): void {
    this.ConditionEn = value;
  }
  public onChangeDescriptionVi(value: string): void {
    this.DescriptionVi = value;
  }
  public onChangeDescriptionJa(value: string): void {
    this.DescriptionJa = value;
  }
  public onChangeDescriptionEn(value: string): void {
    this.DescriptionEn = value;
  }

  onTranslate(value: string) {
    if (value == 'vi') {
      this.isVi = false;
      this.isJa = true;
      this.isEn = true;
    }
    if (value == 'ja') {
      this.isVi = true;
      this.isJa = false;
      this.isEn = true;
    }
    if (value == 'en') {
      this.isVi = true;
      this.isJa = true;
      this.isEn = false;
    }
  }
}
