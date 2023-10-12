import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl: string = "http://localhost:5555/api/orders";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Order[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Order[]>
  }
  get(id: number): Observable<Order> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Order>;
  }
  create(ord: Order): Observable<Order> {
    return this.http.post(`${this.baseUrl}`, ord) as Observable<Order>;
  }
  change(ord: Order): Observable<any> {
    return this.http.put(`${this.baseUrl}/${ord.id}`, ord) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
