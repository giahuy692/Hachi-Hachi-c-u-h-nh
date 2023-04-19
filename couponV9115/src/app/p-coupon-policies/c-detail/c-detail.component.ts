import { Component, Input, OnInit } from '@angular/core';

//Service
import { ServiceService } from 'src/app/service/service.service';

//interface
import { ProductList, ProductApi } from 'src/app/DTO';
import { DrawerComponent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-c-detail',
  templateUrl: './c-detail.component.html',
  styleUrls: ['./c-detail.component.scss'],
})
export class CDetailComponent implements OnInit {
  @Input() drawerRef: DrawerComponent;
  arrProduct: ProductApi[];
  productList: any;
  valueSearch: string = '';
  filterData: any = {};

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getDataApi().subscribe((data: ProductList) => {
      this.productList = data.ObjectReturn.Data;
    });
  }

  // Delete
  onDelete(value: any) {
    alert(
      `Đã xóa sản phẩm:\n  - ProductName: ${value.ProductName}\n  - Barcode: ${value.Barcode}`
    );
  }

  // Search
  handleSearch() {
    this.filterData = {
      skip: 0,
      take: 255,
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
    this.service
      .SearchDataApi(this.filterData)
      .subscribe((data: ProductList) => {
        this.productList = data.ObjectReturn.Data;
      });
  }

  // Edit
  handleEdit(id: any) {
    this.drawerRef.toggle();
    this.service.getProduct(id).subscribe((data: ProductList) => {
      this.service.Product.next(data.ObjectReturn);
    });
  }

  ngOnDestroy() {
    this.productList.unsubscribe();
  }
}
