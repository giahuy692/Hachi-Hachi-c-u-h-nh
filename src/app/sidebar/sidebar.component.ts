import { AfterViewInit, Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

//Kendo
import { PanelBarItemModel } from '@progress/kendo-angular-layout';

// icon
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Jquery
import * as $ from 'jquery';

class navbars {
  title: string = '';
  subtitle?: any[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  iconChevron = faChevronDown;
  imageUrl: SafeUrl; //khi bạn muốn truyền một giá trị URL vào một thuộc tính, cần phải sử dụng một đối tượng có kiểu dữ liệu là "SafeUrl", khi bạn muốn truyền một giá trị URL vào một thuộc tính, cần phải sử dụng một đối tượng có kiểu dữ liệu là "SafeUrl"
  public items: Array<PanelBarItemModel> = [
    <PanelBarItemModel>{ title: 'KHUYẾN MÃI' },
    <PanelBarItemModel>{ title: 'NỘI DUNG WEBSITE' },
    <PanelBarItemModel>{ title: 'QUẢN LÝ BANNER' },
    <PanelBarItemModel>{
      title: 'CHÍNH SÁCH',
      expanded: true,
      selected: true,
      children: [
        <PanelBarItemModel>{ title: 'Coupon' },
        <PanelBarItemModel>{ title: 'xxxxxxxxxxxxx' },
        <PanelBarItemModel>{ title: 'xxxxxxxxxxxxx' },
        <PanelBarItemModel>{ title: 'xxxxxxxxxxxxx' },
        <PanelBarItemModel>{ title: 'xxxxxxxxxxxxx' },
        <PanelBarItemModel>{ title: 'xxxxxxxxxxxxx' },
      ],
    },
    <PanelBarItemModel>{ title: 'BÁO CÁO EXCEL' },
  ];

  constructor(private sanitizer: DomSanitizer) {
    const imagePath = 'assets/images/iconMenu.svg';
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(imagePath);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    $(document).ready(() => {
      $(
        "<img src='assets/images/iconMenu.svg' class='imgSidebar'>"
      ).insertBefore(
        '.Sidebar-wapper .panel-tag .k-panelbar > .k-panelbar-header > .k-link .k-panelbar-item-text'
      );
      $('.k-panelbar-group .ng-tns-c514-4 .k-panelbar-item-text ').css({
        'font-weight': '700',
        color: '#FFF',
      });
    });
  }
}
