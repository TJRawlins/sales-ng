import { Component } from '@angular/core';
import { CustomerService } from '../customer.service'; 
import { Customer } from '../customer.class';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  custs!: Customer[]
  message: string = "";
  locale: string = "en";
  substr: string = "";
  sortCol: string = "name";
  sortAsc: boolean = true;

  sortOrder(col: string): void {
    if(col === this.sortCol) {
      this.sortAsc = !this.sortAsc
      return;
    }
    this.sortCol = col;
    this.sortAsc = true
  }

  constructor(
    private custSvc: CustomerService
    ) {}

    ngOnInit(): void {
      this.message = "";

      this.custSvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.custs = res as Customer[]
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
