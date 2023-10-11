import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = "http://localhost:5555/api/employees";

  constructor(
    private http: HttpClient
  ) { }

  loginSvc(email:string, password:string): Observable<Employee[]> {
    return this.http.get(`${this.baseUrl}/${email}/${password}`) as Observable<Employee[]>
  }
}
