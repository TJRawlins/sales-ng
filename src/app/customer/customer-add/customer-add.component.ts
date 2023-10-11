import { Component, Input } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
  message: string = "";
  cust: Customer = new Customer();

  constructor(
    private custSvc: CustomerService,
    private router: Router
    ) {}

    addCust(): void {
      // ADD CUSTOMER
      this.custSvc.create(this.cust).subscribe({
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

    ngOnInit(): void {

    }


}
