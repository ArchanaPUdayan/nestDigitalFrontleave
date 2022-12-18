import { Component } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  employeeCode=""
  name=""
  designation=""
  salary=""
  companyName=""
  mobileNumber=""
  userName=""
  password=""

  data:any={}

  readValue=()=>{
    this.data={
      "employeeCode":this.employeeCode,
      "name":this.name,
      "companyName":this.companyName,
      "designation":this.designation,
      "salary":this.salary,
      "mobileNumber":this.mobileNumber,
      "userName":this.userName,
      "password":this.password
}
  }
}
