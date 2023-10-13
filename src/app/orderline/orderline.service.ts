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

    add(ord1: Orderline): Observable<Orderline> {
      return this.http.post(`${this.baseUrl}`, ord1) as Observable<Orderline>
    }
}


