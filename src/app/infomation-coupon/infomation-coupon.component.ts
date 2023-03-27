import { Component, OnInit } from '@angular/core';

//Jquery
import * as $ from 'jquery';

interface Titles {
  vi: string[];
  ja: string[];
  en: string[];
}

@Component({
  selector: 'app-infomation-coupon',
  templateUrl: './infomation-coupon.component.html',
  styleUrls: ['./infomation-coupon.component.scss'],
})
export class InfomationCouponComponent implements OnInit {
  titles = [
    {
      vi: [
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
      ],
      ja: [
        'クーポン開始コード',
        '発行枚数',
        'クーポン名',
        'ランダムクーポンコードの倍数(x)',
        '適用条件の説明',
        'クーポンの価値',
        '割合 %',
        '説明',
        '有効期限',
        'ステータス',
      ],
      en: [
        'Coupon start code',
        'Number of issuance',
        'Coupon name',
        'Multiple of random coupon code (x)',
        'Description of application conditions',
        'Coupon value',
        'Percentage (%)',
        'Explanation',
        'Validity period',
        'Status',
      ],
    },
  ];

  storeTitle: string[] = ['', '', '', '', '', '', '', '', ''];

  // Khởi tạo một đối tượng Date() mới với ngày hiện tại
  currentStartDate = new Date();
  // Lấy giá trị ngày và tháng hiện tại
  currentStartMonth = this.currentStartDate.getMonth();
  currentStartYear = this.currentStartDate.getFullYear();
  // Khởi tạo một đối tượng Date() mới với ngày đầu tháng
  firstDayOfMonth = new Date(this.currentStartYear, this.currentStartMonth, 1);
  // Khởi tạo một đối tượng Date() mới với ngày hiện tại
  currenEndDate = new Date();
  // Lấy giá trị ngày và tháng hiện tại
  currentEndMonth = this.currenEndDate.getMonth();
  currentEndYear = this.currenEndDate.getFullYear();
  // Tìm ngày cuối cùng của tháng hiện tại
  lastDayOfMonth = new Date(this.currentEndYear, this.currentEndMonth + 1, 0);

  public textAreaValue =
    'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22';

  ngOnInit() {
    $('.coupon-body kendo-label label').css({
      'margin-bottom': '9px',
      width: '100%',
      overflow: 'hidden',
      'white-space': 'nowrap',
      'text-overflow': 'ellipsis',
    });
    $('.coupon-body .k-checkbox').css({ 'margin-bottom': '9px' });

    this.onTranslate('vi');
  }

  onTranslate(value: keyof Titles) {
    if (this.titles[0][value]) {
      for (let i = 0; i < this.titles[0][value].length; i++) {
        this.storeTitle[i] = this.titles[0][value][i];
      }
    }
  }

  public disabledDates = (date: Date): boolean => {
    var today = new Date();
    const nowYear = today.getFullYear(); // Lấy năm hiện tại
    const nowMonth = today.getMonth(); // Lấy tháng hiện tại (từ 0 đến 11)
    const nowDay = today.getDate();
    const disYear = date.getFullYear(); // Lấy năm hiện tại
    const disMonth = date.getMonth(); // Lấy tháng hiện tại (từ 0 đến 11)
    const disDay = date.getDate();
    return date.getDate() < today.getDay();
  };
}
