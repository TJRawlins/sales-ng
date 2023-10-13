import { Component } from '@angular/core';
import { Orderline } from '../orderline.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderline-add',
  templateUrl: './orderline-add.component.html',
  styleUrls: ['./orderline-add.component.css']
})
export class OrderlineAddComponent {

  ord1: Orderline = new Orderline();

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.ord1.orderId = +this.route.snapshot.params["oid"]
  }

}
