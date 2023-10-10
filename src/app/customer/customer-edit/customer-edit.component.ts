import { Component } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {
  message: string = "";
  cust: Customer = new Customer();
  
  constructor(
    private custSvc: CustomerService,
    private route: ActivatedRoute,
    private router: Router
   ) {}

  save(): void {
    // UPDATE CUSTOMER
    this.custSvc.change(this.cust).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/customers");
      },
      error: (err) => {
        if(err.status === 404) {
          this.message = "Customer not found";
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
    this.custSvc.get(id).subscribe({
      next: (res) => {
        this.cust = res
        console.log(res);
      },
      error: (err) => {
        if(err.status === 404) {
          this.message = "Customer not found";
        } else {
          console.error(err);
        }
      }
    });
  }
}