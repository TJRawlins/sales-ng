import { Component } from '@angular/core';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-get',
  templateUrl: './item-get.component.html',
  styleUrls: ['./item-get.component.css']
})
export class ItemGetComponent {
  itm: Item = new Item();

  constructor(
    private itmSvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  removeItm(): void {
    let id = +this.route.snapshot.params["id"]
    this.itmSvc.remove(id).subscribe({
      next: () => {
        console.debug("Deleted")
        this.router.navigateByUrl("/items")
      },
      error: (err) => console.error(err)
    });
  }

  toggleOn: boolean = false;
  toggleHide() {
    this.toggleOn = !this.toggleOn
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.itmSvc.get(id).subscribe({
      next: (res) => {
        this.itm = res;
      },
      error: (err) => console.error(err)
    })
  }

}
