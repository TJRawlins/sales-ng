import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.class';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  emps!: Employee[]
  message: string = "";
  locale: string = "en";
  substr: string = "";

  constructor(
    private empSvc: EmployeeService
    ) {}

    ngOnInit(): void {
      this.message = "";

      this.empSvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.emps = res as Employee[]
        },
        error: (err) => {
          if(err.status === 404) {
            this.message = "Employee not found";
          } else {
            console.error(err);
          }
        }
      });
    }
}
