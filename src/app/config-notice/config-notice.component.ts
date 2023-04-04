import { Component } from '@angular/core';

@Component({
  selector: 'app-config-notice',
  templateUrl: './config-notice.component.html',
  styleUrls: ['./config-notice.component.scss'],
})
export class ConfigNoticeComponent {
  public textAreaValue =
    'Hi James, thanks for contacting our support team. Please, use our ticket system with the specific problem you have and we will get back to you with a solution.';
}
