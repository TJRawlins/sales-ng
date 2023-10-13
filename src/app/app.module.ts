import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {DatePipe} from '@angular/common';


import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { E404Component } from './e404/e404.component';
import { HomeComponent } from './home/home.component';
import { CustomerGetComponent } from './customer/customer-get/customer-get.component';
import { MenuComponent } from './menu/menu/menu.component';
import { AboutComponent } from './about/about.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { BoolPipe } from './misc/bool.pipe';
import { SearchCustomerPipe } from './customer/search-customer.pipe';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { SearchEmployeePipe } from './employee/search-employee.pipe';
import { EmployeeGetComponent } from './employee/employee-get/employee-get.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { SortPipe } from './misc/sort.pipe';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { SearchOrderPipe } from './order/search-order.pipe';
import { OrderGetComponent } from './order/order-get/order-get.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';
import { OrderlineListComponent } from './orderline/orderline-list/orderline-list.component';
import { OrderlineAddComponent } from './orderline/orderline-add/orderline-add.component';
import { OrderlineEditComponent } from './orderline/orderline-edit/orderline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    E404Component,
    HomeComponent,
    CustomerGetComponent,
    MenuComponent,
    AboutComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    BoolPipe,
    SearchCustomerPipe,
    EmployeeListComponent,
    SearchEmployeePipe,
    EmployeeGetComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    SortPipe,
    EmployeeLoginComponent,
    OrderAddComponent,
    OrderListComponent,
    SearchOrderPipe,
    OrderGetComponent,
    OrderEditComponent,
    OrderLinesComponent,
    OrderlineListComponent,
    OrderlineAddComponent,
    OrderlineEditComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
