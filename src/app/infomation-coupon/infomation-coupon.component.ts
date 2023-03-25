import { Component, OnInit } from '@angular/core';

//Jquery
import * as $ from 'jquery';

@Component({
  selector: 'app-infomation-coupon',
  templateUrl: './infomation-coupon.component.html',
  styleUrls: ['./infomation-coupon.component.scss'],
})
export class InfomationCouponComponent implements OnInit {
  public value: Date = new Date(25 / 3 / 2023);
  public textAreaValue =
    'KMGBL22-Voucher lịch 100k HĐ 600k-NGÀY KÍNH LÃO-HSD 30/9/22';

  ngOnInit() {
    $('.coupon-body kendo-label label').css({ 'margin-bottom': '9px' });
    $('.coupon-body .k-checkbox').css({ 'margin-bottom': '9px' });
  }
}
