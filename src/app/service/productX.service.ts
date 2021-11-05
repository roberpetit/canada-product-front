import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductX } from '../model/productX';

@Injectable({
  providedIn: 'root'
})
export class ProductXService {

  ProductXURL = 'http://localhost:8080/productX/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<ProductX[]> {
    return this.httpClient.get<ProductX[]>(this.ProductXURL + 'list');
  }

  public save(ProductX: ProductX): Observable<any> {
    return this.httpClient.post<any>(this.ProductXURL + 'create', ProductX);
  }
}
