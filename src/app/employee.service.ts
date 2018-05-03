import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/Http';
import { Product } from './models/product.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class EmployeeService {  

  private _url: string = "/assets/employees.json";

  constructor(private Http: HttpClient) { }

  getproduct(): Observable<Product[]> {

    return this.Http.get<Product[]>(this._url)
      .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");

  }
}
