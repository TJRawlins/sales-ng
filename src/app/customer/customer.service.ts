import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.class';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // baseUrl: string = "http://localhost:5555/api/customers";
  get url() {return `${this.init.config.baseurl}/api/customers`};

  constructor(
    private http: HttpClient,
    private init: AppInitService
  ) { }

  list(): Observable<Customer[]> {
    return this.http.get(`${this.url}`) as Observable<Customer[]>
  }
  get(id: number): Observable<Customer> {
    return this.http.get(`${this.url}/${id}`) as Observable<Customer>;
  }
  create(cust: Customer): Observable<Customer> {
    return this.http.post(`${this.url}`, cust) as Observable<Customer>;
  }
  change(cust: Customer): Observable<any> {
    return this.http.put(`${this.url}/${cust.id}`, cust) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
