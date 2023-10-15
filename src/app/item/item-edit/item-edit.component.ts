import { Component } from '@angular/core';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent {
  itm: Item = new Item();

  constructor(
    private itmSvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.itmSvc.change(this.itm).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/items");
      },
      error: (err) => console.error(err)
    });
  }

  goBack(): void {
    window.history.back();
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
