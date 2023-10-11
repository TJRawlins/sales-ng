import { Component } from '@angular/core';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  message: string = "";
  emp: Employee = new Employee();

  constructor(
    private empSvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    // UPDATE EMPLOYEE
    this.empSvc.change(this.emp).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/employees");
      },
      error: (err) => {
        if(err.status === 404) {
          this.message = "employee not found";
        } else {
          console.error(err);
        }
      }
    });
  }

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"]
    this.empSvc.get(id).subscribe({
      next: (res) => {
        this.emp = res
        console.log(res);
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
