import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  mobile:number=862456678;
  errorToggle:boolean=false;
  userDetailsForm:FormGroup;
  constructor(){
    this.userDetailsForm=new FormGroup({
      username:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')])
    })
  }
  pushDetails(){
    console.log(this.userDetailsForm.value)
  }
  get userDetailsControl(){
    return this.userDetailsForm.controls
  }
  errorToggler(){
    this.errorToggle=true;
    setTimeout(()=>this.errorToggle=false,2000)
  }


}
