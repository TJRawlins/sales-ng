import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

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
    SearchCustomerPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
