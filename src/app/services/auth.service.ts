import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loggedInStatus=JSON.parse(sessionStorage.getItem('loggedIn') || 'false');
private authLoginStatus:boolean;  
constructor() { }
  setLoggedIn(){
      // localStorage.setItem('loggedIn','true');
      sessionStorage.setItem('loggedIn','true');
  }
  get isLoggedIn() {
    return JSON.parse(sessionStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }
  authLogin(){
    this.authLoginStatus=true;
    console.log(this.authLoginStatus)
  }
  get isAuthLogin(){
    console.log(this.authLoginStatus)
    return this.authLoginStatus;
  } 

  setAdminLogin(){
    localStorage.setItem('adminOn','true');
  }
  get isAdminOn() {
    return JSON.parse(localStorage.getItem('adminOn') || this.loggedInStatus.toString())
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
