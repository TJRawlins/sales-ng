import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.class';
import { HttpClient } from '@angular/common/http';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  // baseUrl: string = "http://localhost:5555/api/items";
  get url() {return `${this.init.config.baseurl}/api/customers`};

  constructor(
    private http: HttpClient,
    private init: AppInitService
  ) { }

  list(): Observable<Item[]> {
    return this.http.get(`${this.url}`) as Observable<Item[]>
  }
  get(id: number): Observable<Item> {
    return this.http.get(`${this.url}/${id}`) as Observable<Item>;
  }
  create(itm: Item): Observable<Item> {
    return this.http.post(`${this.url}`, itm) as Observable<Item>
  }
  change(itm: Item): Observable<any> {
    return this.http.put(`${this.url}/${itm.id}`, itm) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
