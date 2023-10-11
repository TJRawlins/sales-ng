import { Component } from '@angular/core';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent {
  message: string = "";
  emp: Employee = new Employee();

  constructor(
    private empSvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  removeEmp(): void {
    //DELETE EMPLOYEE
    let id = +this.route.snapshot.params["id"]
    this.empSvc.remove(id).subscribe({
      next: () => {
        console.log("Deleted");
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

  toggleOn: boolean = false;
  toggleHide() {
    this.toggleOn = !this.toggleOn
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
