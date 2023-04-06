import { Component } from '@angular/core';
import { PopupSettings } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  today = new Date();

  titlesChange: string = '';

  // Khởi tạo một đối tượng Date() mới với ngày hiện tại
  lastDate = new Date();
  // Lấy giá trị ngày và tháng hiện tại
  currentEndMonth = this.lastDate.getMonth();
  currentEndYear = this.lastDate.getFullYear();
  // Tìm ngày cuối cùng của tháng hiện tại
  lastDayOfMonth = new Date(this.currentEndYear, this.currentEndMonth + 1, 0);

  disabled = (date: Date): boolean => {
    const valueToday = new Date();
    var isDisable = false;

    if (date < valueToday) isDisable = true;

    if (
      date.getDate() == valueToday.getDate() &&
      date.getMonth() == valueToday.getMonth() &&
      date.getFullYear() == valueToday.getFullYear()
    )
      isDisable = false;

    return isDisable;
  };

  public isHidden(date: Date) {
    var value = $('.k-calendar-table .k-calendar-tbody').attr(
      'ng-reflect-view-date'
    );
    var valueChange = new Date(value ?? '');
    return date.getMonth() > valueChange.getMonth() ? 'd-none_ceil' : '';
  }

  public popupSettings: PopupSettings = {
    appendTo: 'component',
    animate: true,
    popupClass: 'wrapper-datepicker',
  };
}
