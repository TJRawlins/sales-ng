import { Component } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order.class';
import { OrderlineService } from 'src/app/orderline/orderline.service';


@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.css']
})
export class OrderLinesComponent {
  ord: Order = new Order;


  constructor(
    private sysSvc: SystemService,
    private ordSvc: OrderService,
    private olSvc: OrderlineService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ok(): void {
    this.ordSvc.ok(this.ord).subscribe({
      next: (res) => {
        console.debug("Order status OK!")
        this.refresh();
      },
      error: (err) => console.error(err)
    })
  }

  backorder(): void {
    this.ordSvc.backorder(this.ord).subscribe({
      next: (res) => {
        console.debug("Placed on backorder!")
        this.refresh();
      },
      error: (err) => console.error(err)
    })
  }

  closed(): void {
    this.ordSvc.closed(this.ord).subscribe({
      next: (res) => {
        console.debug("Order Closed!")
        this.refresh();
      },
      error: (err) => console.error(err)
    })
  }

  // refresh screen when status updated
  refresh(): void {
    let id = this.route.snapshot.params['id'];
    this.ordSvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.ord = res;
      }
    })
  }

  removeOl(id: number): void {
    //DELETE ORDER
    this.olSvc.remove(id).subscribe({
      next: () => {
        console.log("Deleted");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }


  toggleHide(i:number) {
    document.querySelectorAll('.confirm')[i].classList.toggle('hide')
  }

  ngOnInit(): void {
    this.refresh();
  }

}
