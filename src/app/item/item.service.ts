import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl: string = "http://localhost:5555/api/items";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Item[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Item[]>
  }
}
