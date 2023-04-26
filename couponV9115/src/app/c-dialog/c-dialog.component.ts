import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-dialog',
  templateUrl: './c-dialog.component.html',
  styleUrls: ['./c-dialog.component.scss'],
})
export class CDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  private baseImageUrl =
    'https://demos.telerik.com/kendo-ui/content/web/panelbar/';

  public imageUrl(imageName: string): string {
    return this.baseImageUrl + imageName + '.jpg';
  }
}
