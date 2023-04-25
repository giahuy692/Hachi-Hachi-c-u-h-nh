// Angular
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DialogAction } from '@progress/kendo-angular-dialog';
import {
  DrawerComponent,
  DrawerItem,
  DrawerSelectEvent,
} from '@progress/kendo-angular-layout';
import { ProductApi, Item } from 'src/app/DTO';
import { ServiceAPI } from 'src/app/service/service.service';

// Icon
import { faCheckCircle, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { checkCircleIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { NotificationService } from '@progress/kendo-angular-notification';

//Kendo

@Component({
  selector: 'app-Layout',
  templateUrl: './Layout.component.html',
  styleUrls: ['./Layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit {
  // Variable icon
  faCheckCircle = faCheckCircle;
  faPenSquare = faPenSquare;
  svgCheckCircleIcon: SVGIcon = checkCircleIcon;

  // Variable Sidebar
  public showChildren: boolean = false;
  public selectedItem: number = 1;
  public expanded: boolean = false;
  public expandedRight: boolean = false;

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
  public drawerRef: DrawerComponent;
  CodeProduct: number = 0;
  ProductName: string = '';
  ImagesProduct: any;
  OrginalName: string = '';
  BrandName: string = '';
  Barcode: string = '';
  Price: number = 0;
  PriceBase: number = 0;
  PriceVip: number = 0;
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
  TypeData: number = 0;
  Discount: number = 0;
  statusItem: Array<Item> = [
    { value: 0, text: 'Tạo mới' },
    { value: 1, text: 'Chờ duyệt' },
    { value: 2, text: 'Đã duyệt' },
    { value: 3, text: 'Ngừng hiển thị' },
    { value: 4, text: 'Trả về' },
  ];
  selectedItemStatus: Item = this.statusItem[this.StatusID];

  typeData: Array<Item> = [
    { value: 1, text: 'Sản phẩm thường' },
    { value: 2, text: 'Combo' },
    { value: 3, text: 'Quả tặng' },
  ];
  selectedItemTypeData: Item = this.typeData[this.TypeData];
  tempStatus: number = 0;

  // Variable dialog
  opened: boolean = false;

  constructor(
    private service: ServiceAPI,
    private notificationService: NotificationService
  ) {
    this.service.tempStatus.subscribe((v) => {
      this.tempStatus = v;
    });
    this.loadValue();
  }

  ngOnInit() {}

  loadValue() {
    this.service.Product.subscribe((value: ProductApi) => {
      this.ProductName = value.ProductName;
      this.CodeProduct = value.Code;
      this.ImagesProduct = value.ImageThumb;
      this.Barcode = value.Barcode;
      this.BrandName = value.BrandName;
      this.OrginalName = value.OrginalName;
      this.Price = value.Price;
      this.PriceBase = value.PriceBase;
      this.PriceVip = value.PriceVIP;
      this.Alias = value.Alias;
      this.FreeShippingImage = value.FreeShippingImage;
      this.IsBestPrice = value.IsBestPrice;
      this.IsCombo = value.IsCombo;
      this.IsGift = value.IsGift;
      this.IsHachi24h = value.IsHachi24h;
      this.IsNew = value.IsNew;
      this.TypeData = parseInt(value.TypeData);
      this.StatusID = value.StatusID;
      this.Discount = value.Discount;
    });
  }

  ngAfterViewInit(): void {
    this.drawerRef = this.DrawerRightComponent;
  }

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

  // Close dialog
  closeDialog(status: string): void {
    if (status == 'yes') {
      if (this.tempStatus == 1) {
        this.service
          .UpdateProduct(
            this.CodeProduct,
            this.Barcode,
            this.Price,
            this.PriceBase,
            this.PriceVip
          )
          .subscribe((v) => {
            this.notificationService.show({
              content: 'Cập nhật sản phẩm thành công',
              cssClass: 'button-notification',
              hideAfter: 2000,
              animation: { type: 'fade', duration: 400 },
              position: { horizontal: 'left', vertical: 'bottom' },
              type: { style: 'success', icon: true },
            });
          });
        this.opened = false;
        this.DrawerRightComponent.toggle();
      } else {
        this.service
          .AddProduct(this.Barcode, this.Price, this.PriceBase)
          .subscribe((v) => {
            this.notificationService.show({
              content: 'Thêm sản phẩm thành công',
              cssClass: 'button-notification',
              hideAfter: 2000,
              animation: { type: 'fade', duration: 400 },
              position: { horizontal: 'left', vertical: 'bottom' },
              type: { style: 'success', icon: true },
            });
            this.opened = false;
            this.DrawerRightComponent.toggle();
          });
      }
    } else {
      this.opened = false;
    }
  }

  // Open dialog
  openDialog(): void {
    this.opened = true;
  }
  // End: dialog -->
}
