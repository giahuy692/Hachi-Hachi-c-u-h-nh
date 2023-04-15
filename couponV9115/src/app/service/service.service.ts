import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// DTO
import { ProductList } from 'src/app/DTO';

@Injectable({
  providedIn: 'root',
})
export class ServiceService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  getDataApi(): Observable<ProductList> {
    return this.http.post<ProductList>(
      'http://test.lapson.vn/api/product/GetListProduct',
      {}
    );
  }
}
