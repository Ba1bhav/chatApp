import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{url,paths} from '../../../environments/constants'
@Injectable({
  providedIn: 'root'})
export class AuthloginService {

  constructor(private HttpHandler:HttpClient) {

   }
   getOtp(phoneNo:any){
    const data={'phone':phoneNo}
    return this.HttpHandler.post(url+paths.sendOtp,data)
   }
   verifyOtp(Data:any){
    console.log(Data)
    return this.HttpHandler.post(url+paths.verifyOtp,Data)
   }
}
