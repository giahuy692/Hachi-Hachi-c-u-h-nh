import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';
//Service
import { ServiceAPI } from 'src/app/service/service.service';

//interface
import { ProductList, ProductApi, Item } from 'src/app/DTO';
import { DrawerComponent } from '@progress/kendo-angular-layout';

// Icon
import { faCheckCircle, faPenSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-c-detail',
  templateUrl: './c-detail.component.html',
  styleUrls: ['./c-detail.component.scss'],
})
export class CDetailComponent implements OnInit {
  // Variable drawer
  @Input() drawerRef: DrawerComponent;
  ReponProduct: any;

  valueSearch: string = '';
  filterData: {
    skip: number;
    take: number;
    filter: {
      logic: string;
      filters: any;
    };
  };

  //icon
  faCheckCircle = faCheckCircle;
  faPenSquare = faPenSquare;

  // Variable dialog
  opened: boolean = false;
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

  // Variable dialog update
  openedUpdate: boolean = false;

  constructor(
    private service: ServiceAPI,
    private notificationService: NotificationService
  ) {
    this.loadData();
  }

  loadData() {
    this.service.getDataApi().subscribe(
      (data: ProductList) => {
        this.ReponProduct = data.ObjectReturn.Data;
      },
      (e) => {
        console.error(e);
      }
    );
  }

  ngOnInit(): void {}

  ngAfterViewInit() {}

  // <-- Start: Grid product

  // Add product
  handleAddProduct(status: number) {
    this.service.tempStatus.next(status);
    if (status == 0) {
      this.drawerRef.toggle();
    }
    this.loadData();
  }

  // Search product
  handleSearch() {
    if (this.valueSearch == undefined || this.valueSearch == null) {
      this.valueSearch = '';
    }
    this.filterData = {
      skip: 0,
      take: 50,
      filter: {
        logic: 'or',
        filters: [
          {
            ignoreCase: true,
            field: 'ProductName',
            operator: 'contains',
            value: this.valueSearch,
          },
          {
            ignoreCase: true,
            field: 'Barcode',
            operator: 'contains',
            value: this.valueSearch,
          },
          {
            ignoreCase: true,
            field: 'Poscode',
            operator: 'contains',
            value: this.valueSearch,
          },
        ],
      },
    };

    this.service.SearchDataApi(this.filterData).subscribe(
      (data: ProductList) => {
        this.ReponProduct = data.ObjectReturn.Data;
      },
      (e) => {
        console.error(e);
      }
    );
  }

  // Edit product
  handleEdit(code: any, status: number) {
    this.service.tempStatus.next(status);

    if (status == 1) {
      this.drawerRef.toggle();
      this.service.getProduct(code).subscribe((v) => {
        this.service.Product.next(v.ObjectReturn);
      });
    }
    this.loadData();
  }

  // End: Grid product -->

  // <-- Start: dialog

  // Delete product
  onDelete(value: any) {
    if (value !== -1) {
      this.service.DeletedProduct(value).subscribe((v) => {});
    }
    this.opened = false;
    this.notificationService.show({
      content: 'Xóa sản phẩm thành công ' + this.ProductName,
      cssClass: 'button-notification',
      hideAfter: 2000,
      animation: { type: 'fade', duration: 400 },
      position: { horizontal: 'left', vertical: 'bottom' },
      type: { style: 'success', icon: true },
    });
    this.loadData();
  }

  // Close dialog
  closeDialog(status: string): void {
    if (status == 'yes') {
      this.onDelete(this.CodeProduct);
    } else {
      this.opened = false;
    }
  }

  // Open dialog
  openDialog(code: number): void {
    this.opened = true;
    if (code !== -1) {
      this.service.getProduct(code).subscribe((v) => {
        this.ProductName = v.ObjectReturn.ProductName;
        this.CodeProduct = v.ObjectReturn.Code;
      });
    }
  }
  // End: dialog -->

  // Start: Dialog Update
  closeDialogUpdate(status: string): void {
    if (status == 'yes') {
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
            content: 'Cập nhật sản phẩm thành công ' + this.ProductName,
            cssClass: 'button-notification',
            hideAfter: 2000,
            animation: { type: 'fade', duration: 400 },
            position: { horizontal: 'left', vertical: 'bottom' },
            type: { style: 'success', icon: true },
          });
        });
      this.openedUpdate = false;
    } else {
      this.openedUpdate = false;
    }
  }

  public openUpdate(code: number): void {
    this.openedUpdate = true;
    if (code !== -1) {
      this.service.getProduct(code).subscribe((v) => {
        this.CodeProduct = v.ObjectReturn.Code;
        this.ProductName = v.ObjectReturn.ProductName;
        this.ImagesProduct = v.ObjectReturn.ImageThumb;
        this.OrginalName = v.ObjectReturn.OrginalName;
        this.BrandName = v.ObjectReturn.BrandName;
        this.Barcode = v.ObjectReturn.Barcode;
        this.Price = v.ObjectReturn.Price;
        this.PriceBase = v.ObjectReturn.PriceBase;
        this.PriceVip = v.ObjectReturn.PriceVip;
        this.Alias = v.ObjectReturn.Alias;
        this.FreeShippingImage = v.ObjectReturn.FreeShippingImage;
        this.IsBestPrice = v.ObjectReturn.IsBestPrice;
        this.IsCombo = v.ObjectReturn.IsCombo;
        this.IsGift = v.ObjectReturn.IsGift;
        this.IsHachi24h = v.ObjectReturn.IsHachi24h;
        this.IsNew = v.ObjectReturn.IsNew;
        this.IsSpecial = v.ObjectReturn.IsSpecial;
        this.IsPromotion = v.ObjectReturn.IsPromotion;
        this.StatusID = v.ObjectReturn.StatusID;
        this.TypeData = v.ObjectReturn.TypeData;
        this.Discount = v.ObjectReturn.Discount;
      });
    }
  }
  // End: Dialog Update

  ngOnDestroy() {
    this.ReponProduct.unsubscribe();
  }
}
