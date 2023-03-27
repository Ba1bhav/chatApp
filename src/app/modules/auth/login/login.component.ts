import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthloginService } from 'src/app/services/auth/authlogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 loginForm:FormGroup;
 errorToggle:boolean=false;
  constructor(private requestHandler:AuthloginService){
    this.loginForm=new FormGroup({
      phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]{10}')]),
      otp:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(6)])

    })
  }
  logIn(){
   this.requestHandler.verifyOtp(this.loginForm.value).subscribe((response:any)=>
   {
      console.log('Response Success !'+response )
   })
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
    this.requestHandler.getOtp(this.loginForm.value.phone).subscribe((response:any)=>console.log(response))
  }
}
