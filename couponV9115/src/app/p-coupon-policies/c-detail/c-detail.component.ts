import { Component, Input, OnInit } from '@angular/core';

//Service
import { ServiceService } from 'src/app/service/service.service';

//interface
import { ProductList, ProductApi } from 'src/app/DTO';
import { DrawerComponent } from '@progress/kendo-angular-layout';
import { DialogAction } from '@progress/kendo-angular-dialog';

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
  filterData: any = {};

  // Variable dialog
  opened: boolean = false;
  ProductName: string;
  codeProduct: number;

  constructor(private service: ServiceService) {}

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

  // <-- Start: Grid product

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
  }

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
  handleEdit(id: any) {
    this.drawerRef.toggle();
    this.service.getProduct(id).subscribe(
      (data: ProductList) => {
        this.service.Product.next(data.ObjectReturn);
      },
      (e) => {
        console.error(e);
      }
    );
  }

  // End: Grid product -->

  // <-- Start: dialog

  // Log action dialog
  onAction(action: DialogAction): void {
    console.log(action);
    this.opened = false;
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
    this.service.getProduct(code).subscribe(
      (data: ProductList) => {
        this.service.Product.next(data.ObjectReturn);
      },
      (e) => {
        console.error(e);
      }
    );

    this.service.Product.subscribe(
      (v: ProductApi) => {
        this.ProductName = v.ProductName;
        this.codeProduct = v.Code;
      },
      (e) => {
        console.error(e);
      }
    );
  }

  // End: dialog -->

  ngOnDestroy() {
    this.ReponProduct.unsubscribe();
  }
}
