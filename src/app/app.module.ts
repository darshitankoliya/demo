import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'

import { AppRoutingModule, routingComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { TestComponent } from './test/test.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { EmployeeServiceComponent } from './employee.service/employee.service.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProductItemComponent,
    TestComponent,
    PageNotFoundComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
    EmployeeServiceComponent,
    DepartmentListComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HeroService,
    MessageService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
