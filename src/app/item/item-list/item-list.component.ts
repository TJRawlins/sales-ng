import { Component } from '@angular/core';
import { Item } from '../item.class';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  items!: Item[];
  locale: string = "en";
  substr: string = "";

  sortCol: string = "name";
  sortAsc: boolean = true;
  sortOrder(col: string): void {
    if(col === this.sortCol) {
      this.sortAsc = !this.sortAsc
      return;
    }
    this.sortCol = col;
    this.sortAsc = true
  }

  constructor(
    private itmSvc: ItemService
  ) {}

  ngOnInit(): void {
    this.itmSvc.list().subscribe({
      next: (res) => {
        console.debug(res)
        this.items = res as Item[]
      },
      error: (err) => console.error(err)
    })
  }

}
