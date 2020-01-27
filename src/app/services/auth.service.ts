import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loggedInStatus=JSON.parse(localStorage.getItem('loggedIn') || 'false');
  constructor() { }
  setLoggedIn(){
      localStorage.setItem('loggedIn','true');
  }
  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }
}
