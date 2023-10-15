import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.class';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // baseUrl: string = "http://localhost:5555/api/orders";
  get url() {return `${this.init.config.baseurl}/api/orders`};

  constructor(
    private http: HttpClient,
    private init: AppInitService
  ) { }

  list(): Observable<Order[]> {
    return this.http.get(`${this.url}`) as Observable<Order[]>
  }
  get(id: number): Observable<Order> {
    return this.http.get(`${this.url}/${id}`) as Observable<Order>;
  }
  create(ord: Order): Observable<Order> {
    return this.http.post(`${this.url}`, ord) as Observable<Order>;
  }
  change(ord: Order): Observable<any> {
    return this.http.put(`${this.url}/${ord.id}`, ord) as Observable<any>;
  }
  ok(ord: Order): Observable<any> {
    return this.http.put(`${this.url}/ok/${ord.id}`, ord) as Observable<any>;
  }
  backorder(ord: Order): Observable<any> {
    return this.http.put(`${this.url}/bo/${ord.id}`, ord) as Observable<any>;
  }
  closed(ord: Order): Observable<any> {
    return this.http.put(`${this.url}/closed/${ord.id}`, ord) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }

  
}
