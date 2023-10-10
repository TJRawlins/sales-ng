import { Component } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-get',
  templateUrl: './customer-get.component.html',
  styleUrls: ['./customer-get.component.css']
})
export class CustomerGetComponent {
  message: string = "";
  cust: Customer = new Customer();
  
  constructor(
    private custSvc: CustomerService,
    private route: ActivatedRoute,
    private router: Router
   ) {}

  removeCust(): void {
  //DELETE CUSTOMER
    let id = +this.route.snapshot.params["id"]
    this.custSvc.remove(id).subscribe({
      next: () => {
        console.log("Deleted");
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

  toggleOn: boolean = false;
  toggleHide() {
    this.toggleOn = !this.toggleOn
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
