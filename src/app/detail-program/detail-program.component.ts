import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

//Interface
import { Product } from '../interface/product';

//data
import { DataProducts } from '../data/mock-products';

//Service
import { DataService } from '../service/Data/data.service';

@Component({
  selector: 'app-detail-program',
  templateUrl: './detail-program.component.html',
  styleUrls: ['./detail-program.component.scss'],
})
export class DetailProgramComponent {
  textSearch: string = '';
  faSearch = faSearch;

  productList: Product[] = [];
  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit() {
    this.productList = DataProducts;
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
