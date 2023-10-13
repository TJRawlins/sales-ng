import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orderline } from './orderline.class';

@Injectable({
  providedIn: 'root'
})
export class OrderlineService {

  baseUrl: string = "http://localhost:5555/api/orderlines"

  constructor(
    private http: HttpClient
  ) { }

    list(): Observable<Orderline[]> {
      return this.http.get(`${this.baseUrl}`) as Observable<Orderline[]>
    }
    get(id: number): Observable<Orderline> {
      return this.http.get(`${this.baseUrl}/${id}`) as Observable<Orderline>;
    }
    create(ord1: Orderline): Observable<Orderline> {
      return this.http.post(`${this.baseUrl}`, ord1) as Observable<Orderline>
    }
    change(ord1: Orderline): Observable<any> {
      return this.http.put(`${this.baseUrl}/${ord1.id}`, ord1) as Observable<any>;
    }
    remove(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
    }
}


