import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//Service
import { DataService } from '../service/Data/data.service';

//interface
import { ProductList, ProductApi } from '../interface/product';

@Component({
  selector: 'app-detail-program',
  templateUrl: './detail-program.component.html',
  styleUrls: ['./detail-program.component.scss'],
})
export class DetailProgramComponent {
  textSearch: string = '';
  faSearch = faSearch;

  constructor(private dataService: DataService) {}

  arrProduct: ProductApi[];
  productList: any;
  ngOnInit() {
    this.dataService.getDataApi().subscribe((data: ProductList) => {
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
}
