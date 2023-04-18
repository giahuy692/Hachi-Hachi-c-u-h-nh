import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {
  DataSourceRequestState,
  toDataSourceRequest,
} from '@progress/kendo-data-query';

// DTO
import { ProductList } from 'src/app/DTO';

@Injectable({
  providedIn: 'root',
})
export class ServiceService implements OnInit {
  constructor(private http: HttpClient) {}
  gridState: DataSourceRequestState = {};
  dataSourceRequest: any;
  private apiUrl = 'http://test.lapson.vn/api/product/GetListProduct';

  ngOnInit() {}

  ngAfterViewInit() {}

  getDataApi() {
    return new Observable<any>((obs) => {
      this.http.post<ProductList>(this.apiUrl, {}).subscribe(
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

  SearchDataApi(search: any) {
    return new Observable<any>((obs) => {
      this.http
        .post<ProductList>(
          this.apiUrl,
          (this.dataSourceRequest = toDataSourceRequest(search))
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
}
// return this.http.post<ProductList>(
//   'http://test.lapson.vn/api/product/GetListProduct',
//   (this.dataSourceRequest = toDataSourceRequest(this.gridState))
// );
