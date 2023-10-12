import { Component } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-get',
  templateUrl: './order-get.component.html',
  styleUrls: ['./order-get.component.css']
})
export class OrderGetComponent {
  ord: Order = new Order();

  constructor(
    private ordSvc: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  removeOrd(): void {
    //DELETE ORDER
    let id = +this.route.snapshot.params["id"]
    this.ordSvc.remove(id).subscribe({
      next: () => {
        console.log("Deleted");
        this.router.navigateByUrl("/orders");
      },
      error: (err) => console.error(err)
    });
  }

  toggleOn: boolean = false;
  toggleHide() {
    this.toggleOn = !this.toggleOn
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"]

    this.ordSvc.get(id).subscribe({
      next: (res) => {
        this.ord = res
        console.log(res);
      },
      error: (err) => console.error(err)
    });

  }
}
