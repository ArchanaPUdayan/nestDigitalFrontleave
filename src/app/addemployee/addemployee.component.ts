import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  constructor(private api:ApiService){}
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
     this.api.addEmp(this.data).subscribe(
    (generated:any)=>{
    console.log(generated)
    if(generated.status=="success"){
      alert("added ")
      this.employeeCode=""
      this.name=""
      this.designation=""
      this.salary=""
      this.companyName=""
      this.mobileNumber=""
      this.userName=""
      this.password=""
    }

  }
)
}
}
  

