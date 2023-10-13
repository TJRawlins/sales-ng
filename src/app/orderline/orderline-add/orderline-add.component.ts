import { Component } from '@angular/core';
import { Orderline } from '../orderline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderlineService } from '../orderline.service';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';

@Component({
  selector: 'app-orderline-add',
  templateUrl: './orderline-add.component.html',
  styleUrls: ['./orderline-add.component.css']
})
export class OrderlineAddComponent {

  ord1: Orderline = new Orderline();
  items!: Item[];

  constructor(
    private olSvc: OrderlineService,
    private itemSvc: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ){}


  addOrd(): void {
    // ADD CUSTOMER
    this.olSvc.create(this.ord1).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl(`/orders/lines/${this.ord1.orderId}`);
      },
      error: (err) => console.error(err)
    });
  }


  ngOnInit(): void {
    this.ord1.orderId = +this.route.snapshot.params["oid"]
    this.itemSvc.list().subscribe({
      next: (res) => {
        console.debug(res)
        this.items = res
      }, error: (err) => console.error(err)
    })
  }
}

