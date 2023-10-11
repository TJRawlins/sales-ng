import { Component } from '@angular/core';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  message: string = "";
  emp: Employee = new Employee();

  constructor(
    private empSvc: EmployeeService,
    private router: Router
  ) {}

  addEmp(): void {
    // ADD CUSTOMER
    this.empSvc.create(this.emp).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/employees");
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
