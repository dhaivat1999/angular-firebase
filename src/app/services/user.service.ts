import { Injectable } from '@angular/core';
import {IUser } from './../interfaces/users';
import { HttpClient } from 'selenium-webdriver/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

   private _users: IUser[]=[
  //  {userFirstName:"dhaivat",userLastName: "desai",userEmail: "dhaivat1999@gmail.com",userPhone:7874628240 ,userPassword: "Dhaivat123", userConfirmPassword: "Dhaivat123",userBirthDate:"2020-01-26T18:30:00.000Z"}
   ];
   
  constructor() {}

    getUsers(){
          return this._users;
    }
   
}
