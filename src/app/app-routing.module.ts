import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { E404Component } from './e404/e404.component';
import { HomeComponent } from './home/home.component';
import { CustomerGetComponent } from './customer/customer-get/customer-get.component';
import { AboutComponent } from './about/about.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeGetComponent } from './employee/employee-get/employee-get.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderGetComponent } from './order/order-get/order-get.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';
import { OrderlineAddComponent } from './orderline/orderline-add/orderline-add.component';
import { OrderlineEditComponent } from './orderline/orderline-edit/orderline-edit.component';
import { ItemListComponent } from './item/item-list/item-list.component';

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"login", component: EmployeeLoginComponent},
  {path:"home", component: HomeComponent},
  {path:"customers", component: CustomerListComponent},
  {path:"customers/get/:id", component: CustomerGetComponent},
  {path:"customers/add", component: CustomerAddComponent},
  {path:"customers/edit/:id", component: CustomerEditComponent},
  {path:"employees", component: EmployeeListComponent},
  {path:"employees/get/:id", component: EmployeeGetComponent},
  {path:"employees/add", component: EmployeeAddComponent},
  {path:"employees/edit/:id", component: EmployeeEditComponent},
  {path:"orders", component: OrderListComponent},
  {path:"orders/get/:id", component: OrderGetComponent},
  {path:"orders/add", component: OrderAddComponent},
  {path:"orders/edit/:id", component: OrderEditComponent},
  {path:"orders/lines/:id", component: OrderLinesComponent},
  {path:"orderline/add/:oid", component: OrderlineAddComponent},
  {path:"orderline/edit/:oid", component: OrderlineEditComponent},
  {path:"items", component: ItemListComponent},
  {path:"about", component: AboutComponent},
  {path:"**", component: E404Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
