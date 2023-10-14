import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.class';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // baseUrl: string = "http://localhost:5555/api/employees";

  /*
    Use this instead of the url string above
    assets/config.json   ["baseurl": "http:/localhost:5555"]
    app/app.module.ts   [AppInitService, startupServiceFactory]
    app/app-init.service.ts   [config:any, getSettings()]
  */
  get url() {return `${this.init.config.baseurl}/api/employees`};

  constructor(
    private http: HttpClient,
    private init: AppInitService
  ) { }

  list(): Observable<Employee[]> {
    return this.http.get(`${this.url}`) as Observable<Employee[]>
  }
  get(id: number): Observable<Employee> {
    return this.http.get(`${this.url}/${id}`) as Observable<Employee>;
  }
  create(emp: Employee): Observable<Employee> {
    return this.http.post(`${this.url}`, emp) as Observable<Employee>;
  }
  change(emp: Employee): Observable<any> {
    return this.http.put(`${this.url}/${emp.id}`, emp) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
