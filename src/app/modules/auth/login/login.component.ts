import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 loginForm:FormGroup;
 errorToggle:boolean=false;
  constructor(){
    this.loginForm=new FormGroup({
      phoneNo:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new FormControl('',Validators.required)

    })
  }
  logIn(){
    console.log(this.loginForm.value)
  }
   get _loginControls(){
    return this.loginForm.controls
  }
  errorToggler(){
    this.errorToggle=true;
    setTimeout(()=>this.errorToggle=false,2000)
  }
}
