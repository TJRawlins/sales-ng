import { Component } from '@angular/core';
import { Employee } from '../employee.class';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  emp: Employee = new Employee();

  constructor(
    private empSvc: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  login(): void {
    // UPDATE EMPLOYEE
    this.empSvc.loginSvc(this.emp.email, this.emp.password).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/home");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
