import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.class';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = "http://localhost:5555/api/customers";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Customer[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Customer[]>
  }
  get(id: number): Observable<Customer> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Customer>;
  }
  create(cust: Customer): Observable<Customer> {
    return this.http.post(`${this.baseUrl}`, cust) as Observable<Customer>;
  }
  change(cust: Customer): Observable<any> {
    return this.http.put(`${this.baseUrl}/${cust.id}`, cust) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
