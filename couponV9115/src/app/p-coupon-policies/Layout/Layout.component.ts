// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogAction } from '@progress/kendo-angular-dialog';
import {
  DrawerComponent,
  DrawerItem,
  DrawerSelectEvent,
} from '@progress/kendo-angular-layout';
import { ProductApi, ItemStatus } from 'src/app/DTO';
import { ServiceService } from 'src/app/service/service.service';

// Icon
import { faCheckCircle, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { checkCircleIcon, SVGIcon } from '@progress/kendo-svg-icons';

//Kendo

@Component({
  selector: 'app-Layout',
  templateUrl: './Layout.component.html',
  styleUrls: ['./Layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  // Variable icon
  faCheckCircle = faCheckCircle;
  faPenSquare = faPenSquare;
  svgCheckCircleIcon: SVGIcon = checkCircleIcon;

  // Variable Sidebar
  public showChildren: boolean = false;
  public selectedItem: number;
  public expanded = false;
  public expandedRight = false;

  public items = [
    {
      text: 'KHUYẾN MÃI',
      icon: 'icon_coppy.png',
      selected: true,
      id: 0,
    },
    {
      text: 'NỘI DUNG WEBSITE',
      icon: 'icon_coppy.png',
      id: 1,
    },
    {
      text: 'QUẢN LÝ BANNER',
      icon: 'icon_coppy.png',
      id: 2,
    },
    {
      text: 'CHÍNH SÁCH',
      icon: 'icon_coppy.png',
      id: 3,
      child: [
        {
          text: 'Coupon',
          icon: '',
          parentId: 3,
        },
        {
          text: 'xxxxxxxxxx',
          icon: '',
          parentId: 3,
        },
        {
          text: 'xxxxxxxxxx',
          icon: '',
          parentId: 3,
        },
        {
          text: 'xxxxxxxxxx',
          icon: '',
          parentId: 3,
        },
        {
          text: 'xxxxxxxxxx',
          icon: '',
          parentId: 3,
        },
      ],
    },

    {
      text: 'BÁO CÁO EXCEL',
      icon: 'icon_coppy.png',
      id: 4,
      expanded: false,
    },
  ];

  // Variable detail product
  @ViewChild('drawerRight') public DrawerRightComponent: DrawerComponent;
  CodeProduct: number = 0;
  ProductName: string = '';
  ImagesProduct: any;
  OrginalName: string = '';
  BrandName: string = '';
  Barcode: string = '';
  Price: number = 0;
  Alias: string = '';
  FreeShippingImage: string = '';
  IsBestPrice: boolean = false;
  IsCombo: boolean = false;
  IsGift: boolean = false;
  IsHachi24h: boolean = false;
  IsNew: boolean = false;
  IsSpecial: boolean = false;
  IsPromotion: boolean = false;
  StatusID: number = 0;
  TypeData: string = '';
  statusItem: Array<ItemStatus> = [
    { value: 0, text: 'Tạo mới' },
    { value: 1, text: 'Chờ duyệt' },
    { value: 2, text: 'Đã duyệt' },
    { value: 3, text: 'Ngừng hiển thị' },
    { value: 4, text: 'Trả về' },
  ];
  selectedItemStatus: ItemStatus = this.statusItem[this.StatusID];

  // TypeData
  // 1: sp thuong
  // 2: combo
  // 3: qua tang

  // Variable dialog
  opened: boolean = false;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.service.Product.subscribe((value: ProductApi) => {
      this.ProductName = value.ProductName;
      this.CodeProduct = value.Code;
      this.ImagesProduct = value.ImageThumb;
      this.Barcode = value.Barcode;
      this.BrandName = value.BrandName;
      this.OrginalName = value.OrginalName;
      this.Price = value.Price;
      this.Alias = value.Alias;
      this.FreeShippingImage = value.FreeShippingImage;
      this.IsBestPrice = value.IsBestPrice;
      this.IsCombo = value.IsCombo;
      this.IsGift = value.IsGift;
      this.IsHachi24h = value.IsHachi24h;
      this.IsNew = value.IsNew;
      this.TypeData = value.TypeData;
      this.StatusID = value.StatusID;
      console.log(
        '%cLayout.component.ts line:104 value',
        'color: #007acc;',
        value
      );
    });
  }

  ngAfterViewInit() {}

  // <- Drawer left
  //Handle  onSelectd in drawer left
  public onSelect(ev: DrawerSelectEvent): void {
    this.selectedItem = ev.item.id;
  }

  //Handle show children in drawer left
  toggleChildren() {
    this.showChildren = !this.showChildren;
  }

  //Handle expand change drawer left
  onExpandChange(e: boolean): void {
    if (e == false) {
      this.showChildren = false;
    }
  }
  // Drawer left ->

  // <-- Start: dialog

  // Log action dialog
  onAction(action: DialogAction): void {
    console.log(action);
    this.opened = false;
  }

  // Close dialog
  closeDialog(status: string): void {
    if (status == 'yes') {
      console.log('%cLayout.component.ts line:165 Update');
    } else {
      this.opened = false;
    }
  }

  // Open dialog
  openDialog(code: number): void {
    this.opened = true;
  }

  // End: dialog -->
}
