import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = "http://localhost:5555/api/employees";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Employee[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Employee[]>
  }
  get(id: number): Observable<Employee> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Employee>;
  }
  create(emp: Employee): Observable<Employee> {
    return this.http.post(`${this.baseUrl}`, emp) as Observable<Employee>;
  }
  change(emp: Employee): Observable<any> {
    return this.http.put(`${this.baseUrl}/${emp.id}`, emp) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
