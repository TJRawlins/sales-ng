import { Injectable } from '@angular/core';
import { Employee } from './employee/employee.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInEmp: any = new Employee();

  constructor() { }
}
