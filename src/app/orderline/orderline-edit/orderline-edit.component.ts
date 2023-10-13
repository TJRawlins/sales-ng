import { Orderline } from '../orderline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderlineService } from '../orderline.service';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { SystemService } from 'src/app/system.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orderline-edit',
  templateUrl: './orderline-edit.component.html',
  styleUrls: ['./orderline-edit.component.css']
})
export class OrderlineEditComponent {
  // Need to add "new Orderline() so that it gets an actual instance to bind to"
  ord1: Orderline = new Orderline();
  // default the items property to array to prevent undefined r-squig. Alternatively, add a ! after items (items!:)
  items: Item[] = [];

  constructor(
    private sysSvc: SystemService,
    private olSvc: OrderlineService,
    private itemSvc: ItemService,
    private router: Router,
    // used to read path variables
    private route: ActivatedRoute
  ){}

  save(): void {
    // UPDATE ORDER
    this.olSvc.change(this.ord1).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl(`/orders/lines/${this.ord1.orderId}`);
      },
      error: (err) => console.error(err)
    });
  }

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    this.itemSvc.list().subscribe({
      next: (res) => {
        console.debug(res)
        this.items = res
      }, 
      error: (err) => console.error(err)
    })
    // FOREIGN KEY - Use ActiveRoute to get the url id variable (related to app-routing module), then assign to order id
    let id = +this.route.snapshot.params["oid"]
    // Get the items list when page loads
    this.olSvc.get(id).subscribe({
      next: (res) => {
        console.debug(res)
        this.ord1 = res
      }, error: (err) => console.error(err)
    })
  }
}
