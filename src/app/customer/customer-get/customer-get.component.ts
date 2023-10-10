import { Component, Input } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-get',
  templateUrl: './customer-get.component.html',
  styleUrls: ['./customer-get.component.css']
})
export class CustomerGetComponent {
  message: string = "";
  id: number = 1;
  cust!: Customer;
  
  getInput(getId: number) {
    this.id = +getId
    console.log(+this.id)
    
    this.custSvc.get(this.id).subscribe({
      next: (res) => {
        this.cust = res as Customer
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
  
  constructor(
    private custSvc: CustomerService
    ) {}
  
    ngOnInit(): void {

    // GET BY ID
    this.custSvc.get(this.id).subscribe({
      next: (res) => {
        this.cust = res as Customer
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
