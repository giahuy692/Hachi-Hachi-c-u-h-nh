import { Component, OnInit } from '@angular/core';

//Service
import { ServiceService } from 'src/app/service/service.service';

//interface
import { ProductList, ProductApi } from 'src/app/DTO';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-c-detail',
  templateUrl: './c-detail.component.html',
  styleUrls: ['./c-detail.component.scss'],
})
export class CDetailComponent implements OnInit {
  arrProduct: ProductApi[];
  productList: any;
  valueSearch: string = '';

  filterData: any = {};

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getDataApi().subscribe((data: ProductList) => {
      this.productList = data.ObjectReturn.Data;
    });
  }

  ngOnDestroy() {
    this.productList.unsubscribe();
  }

  onDelete(value: any) {
    alert(
      `Đã xóa sản phẩm:\n  - ProductName: ${value.ProductName}\n  - Barcode: ${value.Barcode}`
    );
  }

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
    this.serviceService
      .SearchDataApi(this.filterData)
      .subscribe((data: ProductList) => {
        this.productList = data.ObjectReturn.Data;
      });
    console.log(this.valueSearch);
  }
}
