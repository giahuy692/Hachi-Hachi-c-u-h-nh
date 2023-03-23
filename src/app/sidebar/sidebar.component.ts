import { AfterViewInit, Component } from '@angular/core';

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
  navbars: navbars[] = [
    { title: 'KHUYẾN MÃI', subtitle: undefined },
    { title: 'NỘI DUNG WEBSITE', subtitle: undefined },
    { title: 'QUẢN LÝ BANNER', subtitle: undefined },
    {
      title: 'CHÍNH SÁCH',
      subtitle: [
        'Coupon',
        'xxxxxxxxxxxxx',
        'xxxxxxxxxxxxx',
        'xxxxxxxxxxxxx',
        'xxxxxxxxxxxxx',
        'xxxxxxxxxxxxx',
      ],
    },
    { title: 'BÁO CÁO EXCEL', subtitle: undefined },
  ];

  onClickSub(value: navbars) {
    if (value.subtitle != undefined) {
      $(document).ready(function () {
        $('.subContainer').off().addClass('showSub');
      });
    } else {
      $(document).ready(function () {
        $('.subContainer').off().removeClass('showSub');
      });
    }
  }

  ngAfterViewInit() {
    $(document).ready(() => {
      $('.submenu').removeClass('k-rounded-md');
      $('.btn_link')
        .off()
        .on('click', function () {
          $('.btn_link').removeClass('h-btn-active');
          $('.btn_link').removeClass('k-rounded-md');
          $(this).addClass('h-btn-active');
        });
    });
  }
}
