import { Component, Directive } from '@angular/core';
import { Order } from '../order.class';
import { Customer } from 'src/app/customer/customer.class';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  ords!: Order[];
  locale: string = "en";
  substr: string = "";
  
  customerId: number = 0;
  customer: Customer | null = null;
  
  sortCol: string = "date";
  sortAsc: boolean = true;
  
  constructor(
    private ordSvc: OrderService,
    ) {}

  
  sortOrder(col: string): void {
    if(col === this.sortCol) {
      this.sortAsc = !this.sortAsc
      return;
    }
    this.sortCol = col;
    this.sortAsc = true
  }
  
  ngOnInit(): void {
    this.ordSvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.ords = res as Order[];
      },
      error: (err) => console.error(err)
    });
  }
  
}
