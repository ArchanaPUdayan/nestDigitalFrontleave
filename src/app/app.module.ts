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
import { ViewSecurityComponent } from './view-security/view-security.component';
import { SearchSecurityComponent } from './search-security/search-security.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeavenavbarComponent } from './leavenavbar/leavenavbar.component';
import { ViewleavesComponent } from './viewleaves/viewleaves.component';
import { ViewleavesstatusComponent } from './viewleavesstatus/viewleavesstatus.component';
import { LoginSecurityComponent } from './login-security/login-security.component';

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
  },
  {
    path:"viewGuard",
    component: ViewSecurityComponent
  },
  {
    path:"searchGuard",
    component:SearchSecurityComponent
  },
   {
    path:"viewLeaves",
    component:ViewleavesstatusComponent

  },
  {
    path:"Leaves",
    component:ViewleavesComponent

  },
  {
    path:"guard",
    component: LoginSecurityComponent
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
    AddSecurityComponent,
    ViewSecurityComponent,
    SearchSecurityComponent,
    NavbarComponent,
    LeavenavbarComponent,
    ViewleavesComponent,
    ViewleavesstatusComponent,
    LoginSecurityComponent
   

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
