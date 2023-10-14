import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus: Menu[] = [
    new Menu("HOME", "/home"),
    new Menu("CUSTOMERS", "/customers"),
    new Menu("EMPLOYEES", "/employees"),
    new Menu("ORDERS", "/orders"),
    new Menu("ITEMS", "/items"),
    new Menu("ABOUT", "/about"),
  ];
}
