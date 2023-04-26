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
  products = new ProductApi();
  statusItem: Array<Item> = [
    { value: 0, text: 'Tạo mới' },
    { value: 1, text: 'Chờ duyệt' },
    { value: 2, text: 'Đã duyệt' },
    { value: 3, text: 'Ngừng hiển thị' },
    { value: 4, text: 'Trả về' },
  ];
  selectedItemStatus: Item = this.statusItem[this.products.StatusID];

  typeData: Array<Item> = [
    { value: 1, text: 'Sản phẩm thường' },
    { value: 2, text: 'Combo' },
    { value: 3, text: 'Quả tặng' },
  ];
  selectedItemTypeData: Item = this.typeData[this.products.TypeData];
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
        if (v.ErrorString != null) {
          this.notificationService.show({
            content: v.ErrorString,
            cssClass: 'button-notification',
            hideAfter: 2000,
            animation: { type: 'fade', duration: 400 },
            position: { horizontal: 'left', vertical: 'bottom' },
            type: { style: 'error', icon: true },
          });
        } else {
          this.service.Product.next(v.ObjectReturn);
        }
      });
    }
  }

  // End: Grid product -->

  // <-- Start: dialog

  // Delete product
  onDelete(value: any) {
    if (value !== -1) {
      this.service.DeletedProduct(value).subscribe((v) => {
        if (v.ErrorString != null) {
          this.notificationService.show({
            content: v.ErrorString,
            cssClass: 'button-notification',
            hideAfter: 2000,
            animation: { type: 'fade', duration: 400 },
            position: { horizontal: 'left', vertical: 'bottom' },
            type: { style: 'error', icon: true },
          });
        } else {
          this.notificationService.show({
            content: 'Xóa sản phẩm thành công ' + this.products.ProductName,
            cssClass: 'button-notification',
            hideAfter: 2000,
            animation: { type: 'fade', duration: 400 },
            position: { horizontal: 'left', vertical: 'bottom' },
            type: { style: 'success', icon: true },
          });
        }
      });
    }
    this.opened = false;

    this.loadData();
  }

  // Close dialog
  closeDialog(status: string): void {
    if (status == 'yes') {
      this.onDelete(this.products.Code);
    } else {
      this.opened = false;
    }
  }

  // Open dialog
  openDialog(code: number): void {
    this.opened = true;
    if (code !== -1) {
      this.service.getProduct(code).subscribe((v) => {
        this.products.ProductName = v.ObjectReturn.ProductName;
        this.products.Code = v.ObjectReturn.Code;
        this.products.Discount = this.products.Discount / 100;
      });
    }
  }
  // End: dialog -->

  // Start: Dialog Update
  closeDialogUpdate(status: string): void {
    if (status == 'yes') {
      this.service
        .UpdateProduct(
          this.products.Code,
          this.products.Barcode,
          this.products.Price,
          this.products.PriceBase,
          this.products.PriceVIP
        )
        .subscribe((v) => {
          if (v.ErrorString != null) {
            this.notificationService.show({
              content: v.ErrorString,
              cssClass: 'button-notification',
              hideAfter: 2000,
              animation: { type: 'fade', duration: 400 },
              position: { horizontal: 'left', vertical: 'bottom' },
              type: { style: 'error', icon: true },
            });
          } else {
            this.notificationService.show({
              content:
                'Cập nhật sản phẩm thành công ' + this.products.ProductName,
              cssClass: 'button-notification',
              hideAfter: 2000,
              animation: { type: 'fade', duration: 400 },
              position: { horizontal: 'left', vertical: 'bottom' },
              type: { style: 'success', icon: true },
            });
          }
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
        this.products = v.ObjectReturn;
      });
    }
  }
  // End: Dialog Update

  ngOnDestroy() {
    this.ReponProduct.unsubscribe();
  }
}
