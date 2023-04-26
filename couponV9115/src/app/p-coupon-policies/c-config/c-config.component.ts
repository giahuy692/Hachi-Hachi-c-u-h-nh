import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-config',
  templateUrl: './c-config.component.html',
  styleUrls: ['./c-config.component.scss'],
})
export class CConfigComponent implements OnInit {
  isSMS: boolean = false;
  dateSMS: Date = new Date();
  isCheckSMS: boolean = false;
  isRadioSMS: null;
  isTitleSMS: string = 'Tiêu đề gửi SMS';
  isContentSMS: string = 'Nội dung gửi SMS';

  isMobile: boolean = true;
  dateMobile: Date = new Date();
  isCheckMobile: boolean = false;
  isRadioMobile: null;
  isTitleMobile: string = 'Tiêu đề gửi Mobile';
  isContentMobile: string = 'Nội dung gửi Mobile';

  isCart: boolean = true;
  dateCart: Date = new Date();
  isCheckCart: boolean = false;
  isRadioCart: null;
  isTitleCart: string = 'Tiêu đề gửi Cart';
  isContentCart: string = 'Nội dung gửi Cart';

  constructor() {}

  ngOnInit(): void {}

  onChangeTitleSMS(value: string) {
    this.isTitleSMS = value;
  }
  onChangeTitleMobile(value: string) {
    this.isTitleMobile = value;
  }
  onChangeTitleCart(value: string) {
    this.isTitleCart = value;
  }

  onChangeContentSMS(value: string) {
    this.isContentSMS = value;
  }
  onChangeContentMobile(value: string) {
    this.isContentMobile = value;
  }
  onChangeContentCart(value: string) {
    this.isContentCart = value;
  }

  onTranslate(value: string) {
    if (value == 'SMS') {
      this.isSMS = false;
      this.isMobile = true;
      this.isCart = true;
    }
    if (value == 'Mobile') {
      this.isSMS = true;
      this.isMobile = false;
      this.isCart = true;
    }
    if (value == 'Cart') {
      this.isSMS = true;
      this.isMobile = true;
      this.isCart = false;
    }
  }
}
