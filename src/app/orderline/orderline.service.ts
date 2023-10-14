import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orderline } from './orderline.class';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class OrderlineService {

  // baseUrl: string = "http://localhost:5555/api/orderlines"
  get url() {return `${this.init.config.baseurl}/api/orderlines`};

  constructor(
    private http: HttpClient,
    private init: AppInitService
  ) { }

    list(): Observable<Orderline[]> {
      return this.http.get(`${this.url}`) as Observable<Orderline[]>
    }
    get(id: number): Observable<Orderline> {
      return this.http.get(`${this.url}/${id}`) as Observable<Orderline>;
    }
    create(ord1: Orderline): Observable<Orderline> {
      return this.http.post(`${this.url}`, ord1) as Observable<Orderline>
    }
    change(ord1: Orderline): Observable<any> {
      return this.http.put(`${this.url}/${ord1.id}`, ord1) as Observable<any>;
    }
    remove(id: number): Observable<any> {
      return this.http.delete(`${this.url}/${id}`) as Observable<any>;
    }
}


