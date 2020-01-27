import { Component, OnInit } from '@angular/core';
import {FirebaseError} from 'firebase';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { IUser } from './../interfaces/users';
import { UserService } from '../services/user.service';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:IUser[]; 
  userList:IUser[];
  userArray:String[];
  userEmail:string;
  userPassword:string;
  userCheckEmail:string;
  userCheckPassword:string;
  counter:number;
  constructor(private firebaseService:FirebaseServiceService,private router:Router,private authService:AuthService) { }
  submit(loginForm)
  {
    this.userCheckEmail=loginForm.value.loginEmail;
    this.userCheckPassword=loginForm.value.loginPassword;
    this.firebaseService.getUsersFromFirebase().snapshotChanges().forEach(usersSnapshot => {
      this.userList=[];
      usersSnapshot.forEach(userSnapshot =>{
          let user=userSnapshot.payload.toJSON();
          user['$key']=userSnapshot.key;
           this.userList.push(user as IUser);
           this.counter=this.userList.length;
           for(let i=0;i < this.userList.length; i++) 
           {
              this.userEmail=this.userList[i].userEmail.toString();
              this.userPassword=this.userList[i].userPassword.toString();
              if(this.userEmail === this.userCheckEmail  && this.userPassword === this.userCheckPassword)
              // if(this.userCheckEmail=='admin' && this.userCheckPassword=='admin')
              {
                this.authService.setLoggedIn();
                console.log("User exists");
                console.log(this.userEmail);
                console.log(this.userPassword);
                console.log(this.userCheckEmail);
                console.log(this.userCheckPassword);
                this.router.navigate(['/home']);
                break;
              }
                alert("Incorrect email and password");
                console.log("user does not exists");
                console.log(this.userEmail);
                console.log(this.userPassword);
                console.log(this.userCheckEmail);
                console.log(this.userCheckPassword);
            // this.userList[i]
           }
       //    console.log(loginForm.value.loginEmail);
        //console.log( this.userList[0].userEmail);
  });
 });
//  console.log(this.userEmail);
//  console.log(this.userPassword)
}
  ngOnInit() {
  }

}
