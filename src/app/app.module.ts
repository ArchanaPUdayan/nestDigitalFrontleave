import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"add",
    component:AddemployeeComponent
  },
  {
  path:"view",
  component:ViewEmployeeComponent
  },
  {
    path:"search",
    component:SearchEmployeeComponent
  },
  {
    path:"addGuard",
    component:AddSecurityComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    AdminComponent,
    LoginComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent,
    AddSecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
