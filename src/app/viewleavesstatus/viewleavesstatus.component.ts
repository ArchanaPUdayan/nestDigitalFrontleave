import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewleavesstatus',
  templateUrl: './viewleavesstatus.component.html',
  styleUrls: ['./viewleavesstatus.component.css']
})
export class ViewleavesstatusComponent {
  data:any=[]

  constructor(private api:ApiService){
    let data1:any={

      "empid" : localStorage.getItem("empinfo")

}

    this.api.viewLeaves(data1).subscribe(
      (generatedValue)=>{
        this.data=generatedValue
      }
    )

  }
}
