import { Component, Input } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
  message: string = "";

  constructor(
    private custSvc: CustomerService
    ) {}

    ngOnInit(): void {

    let cust = new Customer;
    cust.code = "OO";
    cust.name = "Customer OO";
    cust.sales = 1000;
    cust.active = true;
      
      // ADD CUSTOMER
      this.custSvc.create(cust).subscribe({
        next: (res) => {
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
