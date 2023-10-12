import { Component } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent {
  ord: Order = new Order();

  constructor(
    private ordSvc: OrderService,
    private route: ActivatedRoute,
    private router: Router
   ) {}

   save(): void {
    // UPDATE ORDER
    this.ordSvc.change(this.ord).subscribe({
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
