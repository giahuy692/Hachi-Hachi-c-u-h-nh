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

    this.service.SearchDataApi(JSON.stringify(this.filterData)).subscribe(
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
    console.log(
      '%cc-detail.component.ts line:110 Status',
      'color: #007acc;',
      status
    );
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
      this.service.DeletedProduct(value).subscribe((v) => {
        console.log('%cc-detail.component.ts line:131 v', 'color: #007acc;', v);
      });
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
      this.onDelete(this.codeProduct);
    } else {
      this.opened = false;
    }
  }

  // Open dialog
  openDialog(code: number): void {
    this.opened = true;
    if (code !== -1) {
      for (let index = 0; index < this.ReponProduct.length; index++) {
        var v = this.ReponProduct.filter((item) => item.Code === code);
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
