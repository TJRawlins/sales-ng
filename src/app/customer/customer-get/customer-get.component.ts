import { Component } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-get',
  templateUrl: './customer-get.component.html',
  styleUrls: ['./customer-get.component.css']
})
export class CustomerGetComponent {
  message: string = "";
  urlId!: string;
  cust!: Customer;
  
  constructor(
    private custSvc: CustomerService,
    private route: ActivatedRoute
    ) {}
    
  ngOnInit(): void {
    // Gets id from route url params
    this.urlId = (this.route.snapshot.paramMap.get('id')|| '{}');

    // Get id from route param on initial load
    this.custSvc.get(+this.urlId).subscribe({
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
