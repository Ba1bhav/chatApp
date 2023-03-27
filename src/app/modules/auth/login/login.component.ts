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
      phoneNo:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]{10}')]),
      otp:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(6)])

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
  numberCheck(value:any){
    value.value=value.value.match('[0-9]+')
  }
  sendOtp(){
    console.log(this.loginForm.value.phoneNo)
  }
}
