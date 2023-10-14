import { Component } from '@angular/core';
import { Orderline } from '../orderline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderlineService } from '../orderline.service';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-orderline-add',
  templateUrl: './orderline-add.component.html',
  styleUrls: ['./orderline-add.component.css']
})
export class OrderlineAddComponent {

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


  addOrd(): void {
    // ADD ORDERLINE
    this.olSvc.create(this.ord1).subscribe({
      next: (res) => {
        // console.log(res);
        this.router.navigateByUrl(`/orders/lines/${this.ord1.orderId}`);
      },
      error: (err) => console.error(err)
    });
  }

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    // FOREIGN KEY - Use ActiveRoute to get the url id variable (related to app-routing module), then assign to order id
    this.ord1.orderId = +this.route.snapshot.params["oid"]
    console.log(this.ord1)
    // Get the items list when page loads
    this.itemSvc.list().subscribe({
      next: (res) => {
        // console.debug(res)
        this.items = res
      }, error: (err) => console.error(err)
    })
  }
}

