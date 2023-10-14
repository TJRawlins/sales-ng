import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order.class';
import { OrderService } from '../order.service';
import { Customer } from 'src/app/customer/customer.class';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent {
  
  ord: Order = new Order();
  custs!: Customer[];

  constructor(
    private empSvc: OrderService,
    private router: Router,
    private custSvc: CustomerService
  ) {}

  addOrd(): void {
    // ADD CUSTOMER
    this.empSvc.create(this.ord).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/orders");
      },
      error: (err) => console.error(err)
    });
  }

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    this.custSvc.list().subscribe({
      next: (res) => {
        console.debug(res)
        this.custs = res
      }, error: (err) => console.error(err)
    })
  }


}
