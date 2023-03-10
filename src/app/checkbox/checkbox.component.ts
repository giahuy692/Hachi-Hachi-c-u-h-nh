import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  isActive: boolean = false;
  isInActive: boolean = false;
  @Output() active = new EventEmitter<string>();
  @Output() InActive = new EventEmitter<string>();

  onCheckboxChangeActive(): void {}

  onCheckboxChangeInAction(): void {}
}
