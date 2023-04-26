import { Component, Input, AfterViewInit } from '@angular/core';
import { PopupSettings } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements AfterViewInit {
  timePicker: JQuery<HTMLElement>;
  valuedefault: string = 'hh : mm';
  isChecked: boolean = false;
  valueTime: string = '';
  valueDate: Date = new Date();
  listItems: Array<string> = [];
  @Input() date: Date = new Date();

  listAm: Array<string> = [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
  ];

  listPm: Array<string> = [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
  ];

  public popupSettings: PopupSettings = {
    appendTo: 'component',
    animate: false,
    popupClass: 'DateTimePicker-wrapper',
  };

  ngOnInit() {}

  ngAfterViewInit() {
    $(document).ready(() => {
      this.timePicker = $('#TimePicker').detach();
    });
    this.listItems = this.listPm;
  }

  onOpen() {
    $(document).ready(() => {
      $('.k-calendar-classic').append(this.timePicker);
      $('.k-datetime-footer').append(this.timePicker);
    });
  }

  onClose(event: any) {
    $('.k-animation-container').css('display', 'block');
    $('.wrapperTime').append(this.timePicker);
    event.preventDefault();
  }

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

  isHidden(date: Date, valueString: string) {
    var month = Number(valueString.split(' ')[1]);
    return date.getMonth() == month ? 'd-none_ceil' : '';
  }

  onAmHandle() {
    this.listItems = this.listAm;
    this.valuedefault = this.listAm[0];
    this.valueTime = this.valuedefault;
    this.date = new Date(
      `${this.valueDate.toDateString()} ${this.valuedefault}`
    );
  }

  onPmHandle() {
    this.listItems = this.listPm;
    this.valuedefault = this.listPm[this.listPm.length - 1];
    this.valueTime = this.valuedefault;
    this.date = new Date(
      `${this.valueDate.toDateString()} ${this.valuedefault}`
    );
  }

  valueChangeTime(value: any): void {
    this.valueTime = value;
    this.date = new Date(`${this.valueDate.toDateString()} ${this.valueTime}`);
    console.log(this.date);
    $('.k-animation-container').css('display', 'none');
  }

  selectionChangeTime(value: any): void {
    this.valueTime = value;
    this.date = new Date(`${this.valueDate.toDateString()} ${this.valueTime}`);
    $('.k-animation-container').css('display', 'none');
  }

  onChangeValueDate(value: Date): void {
    if (this.isChecked) {
      this.valueDate = value;
      console.log(this.valueChangeTime);
      this.date = new Date(`${this.valueDate.toDateString()} 00:00`);
      $('.k-animation-container').css('display', 'none');
    } else {
      this.valueDate = value;
      console.log(this.valueChangeTime);
      this.date = new Date(
        `${this.valueDate.toDateString()} ${this.valueTime}`
      );
    }
  }

  onAllDate() {
    var a = $(' .k-calendar-tbody').attr('ng-reflect-selected-dates');
    var b = a?.slice(0, 15);
    this.date = new Date(`${b}`);
  }

  onBlur() {
    $(document).ready(() => {
      $('.k-animation-container').toggle().css('display', 'none');
    });
  }
}
