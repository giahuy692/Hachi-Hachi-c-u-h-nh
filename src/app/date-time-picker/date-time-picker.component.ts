import { Component } from '@angular/core';
import { PopupSettings } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent {
  public valueToday: Date = new Date();

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
    popupClass: 'time-notice',
  };
}
