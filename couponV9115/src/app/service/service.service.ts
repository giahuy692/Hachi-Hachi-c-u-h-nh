import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {
  DataSourceRequestState,
  toDataSourceRequest,
} from '@progress/kendo-data-query';

// DTO
import { ProductApi, ProductList } from 'src/app/DTO';

@Injectable({
  providedIn: 'root',
})
export class ServiceAPI implements OnInit {
  constructor(private http: HttpClient) {}
  gridState: DataSourceRequestState = {};
  dataSourceRequest: any;
  Product = new Subject<any>();
  private apiUrl = 'http://test.lapson.vn/api/product/';

  ngOnInit() {}

  ngAfterViewInit() {}

  // GET ProductList
  getDataApi() {
    return new Observable<any>((obs) => {
      this.http.post<ProductList>(this.apiUrl + 'GetListProduct', {}).subscribe(
        (data) => {
          obs.next(data);
          obs.complete();
        },
        (error) => {
          console.log(error);
          obs.error(error);
        }
      );
    });
  }

  // GET Product
  getProduct(id: any) {
    return new Observable<any>((obs) => {
      this.http
        .post<ProductList>(this.apiUrl + 'GetProduct', { Code: id })
        .subscribe(
          (data) => {
            obs.next(data);
            obs.complete();
            console.log('Get Product: ', data.ErrorString);
          },
          (error) => {
            console.log(error);
            obs.error(error);
          }
        );
    });
  }

  // Delete Product
  delteProduct(id: any) {
    return new Observable<any>((obs) => {
      this.http
        .post<ProductList>(this.apiUrl + 'GetProduct', { Code: id })
        .subscribe(
          (data) => {
            obs.next(data);
            obs.complete();
            console.log('Get Product: ', data.ErrorString);
          },
          (error) => {
            console.log(error);
            obs.error(error);
          }
        );
    });
  }

  // SEARCH Product
  SearchDataApi(search: any) {
    return new Observable<any>((obs) => {
      this.http
        .post<ProductList>(
          this.apiUrl + 'GetProduct',
          toDataSourceRequest(search)
        )
        .subscribe(
          (data) => {
            console.log(data);
            obs.next(data);
            obs.complete();
          },
          (error) => {
            console.log(error);
            obs.error(error);
          }
        );
    });
  }

  // Update Product
  UpdateProduct(id: any) {
    return new Observable<any>((obs) => {
      this.http
        .post<ProductList>(this.apiUrl + 'GetProduct', toDataSourceRequest(id))
        .subscribe(
          (data) => {
            console.log(data);
            obs.next(data);
            obs.complete();
          },
          (error) => {
            console.log(error);
            obs.error(error);
          }
        );
    });
  }

  // Delete Product
  DeletedProduct(id: any) {
    return new Observable<any>((obs) => {
      this.http
        .post<ProductList>(this.apiUrl + 'GetProduct', toDataSourceRequest(id))
        .subscribe(
          (data) => {
            console.log(data);
            obs.next(data);
            obs.complete();
          },
          (error) => {
            console.log(error);
            obs.error(error);
          }
        );
    });
  }
}
