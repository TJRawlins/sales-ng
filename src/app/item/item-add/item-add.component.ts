import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {
  itm: Item = new Item();

  constructor(
    private itmSvc: ItemService,
    private router: Router
  ) {}

  goBack(): void {
    window.history.back();
  }

  addItm(): void {
    this.itmSvc.create(this.itm).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigateByUrl("/items");
      },
      error: (err) => console.error(err)
    });
  }
}
