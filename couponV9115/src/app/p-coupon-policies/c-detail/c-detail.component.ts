import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';
//Service
import { ServiceAPI } from 'src/app/service/service.service';

//interface
import { ProductList, ProductApi } from 'src/app/DTO';
import { DrawerComponent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-c-detail',
  templateUrl: './c-detail.component.html',
  styleUrls: ['./c-detail.component.scss'],
})
export class CDetailComponent implements OnInit {
  // Variable drawer
  @Input() drawerRef: DrawerComponent;
  ReponProduct: any;
  ListProduct: any[];

  valueSearch: string = '';
  filterData: {
    skip: number;
    take: number;
    filter: {
      logic: string;
      filters: any;
    };
  };

  // Variable dialog
  opened: boolean = false;
  ProductName: string = '';
  codeProduct: number = 0;

  constructor(
    private service: ServiceAPI,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.ReponProduct = this.service.getDataApi().subscribe(
      (data: ProductList) => {
        this.ListProduct = data.ObjectReturn.Data;
      },
      (e) => {
        console.error(e);
      }
    );
  }

  ngAfterViewInit() {}

  // <-- Start: Grid product

  // Search product
  handleSearch() {
    this.filterData = {
      skip: 0,
      take: this.ListProduct.length,
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
        this.ListProduct = data.ObjectReturn.Data;
      },
      (e) => {
        console.error(e);
      }
    );
  }

  // Edit product
  handleEdit(code: any) {
    this.drawerRef.toggle();
    this.service.getProduct(code).subscribe((v) => {
      this.service.Product.next(v.ObjectReturn);
    });
  }

  // End: Grid product -->

  // <-- Start: dialog

  // Delete product
  onDelete(value: any) {
    if (value !== -1) {
      for (let index = 0; index < this.ListProduct.length; index++) {
        this.ListProduct = this.ListProduct.filter(
          (item) => item.Code !== value
        ); // Xóa phần tử khỏi mảng tạm thời
      }
    }
    this.opened = false;
    this.notificationService.show({
      content: 'Xóa sản phẩm thành công',
      cssClass: 'button-notification',
      hideAfter: 2000,
      animation: { type: 'fade', duration: 400 },
      position: { horizontal: 'left', vertical: 'bottom' },
      type: { style: 'success', icon: true },
    });
  }

  // Close dialog
  closeDialog(status: string): void {
    if (status == 'yes') {
      this.onDelete(this.codeProduct);
    } else {
      this.opened = false;
    }
  }

  // Open dialog
  openDialog(code: number): void {
    this.opened = true;
    if (code !== -1) {
      for (let index = 0; index < this.ListProduct.length; index++) {
        var v = this.ListProduct.filter((item) => item.Code === code);
        this.ProductName = v[0].ProductName;
        this.codeProduct = v[0].Code;
      }
    }
  }
  // End: dialog -->

  ngOnDestroy() {
    this.ReponProduct.unsubscribe();
  }
}
