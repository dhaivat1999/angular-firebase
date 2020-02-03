import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FirebaseError, firestore} from 'firebase';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { IUser } from './../interfaces/users';
import { UserService } from '../services/user.service';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';
// import { AngularFireDatabase } from 'angularfire2/database'
// import { AngularFirestoreCollection } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList, snapshotChanges } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";
// import { Query } from "@google-cloud/firestore"; // update code
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // expensesCollection: AngularFirestoreCollection<>;
  // usercollectionRef:IUser[]
  @ViewChild('alert', { static: true }) alert: ElementRef;
  usercollectionRef = this.afs.collection('users'); // a ref to the todos collection
  user:IUser[]; 
  userList:IUser[];
  userArray:String[];
  userCheckEmail:string;
  userCheckPassword:string;
  query:AngularFireList<any>;
  userPassword:string;
  hide:true;
key:string;
users:any;


  constructor(private firebaseService:FirebaseServiceService,private router:Router,private authService:AuthService,private afs: AngularFirestore,private db:AngularFireDatabase) { 
  }
  submit(loginForm)
  {
    
    this.userCheckEmail=loginForm.value.loginEmail;
    this.userCheckPassword=loginForm.value.loginPassword;
    
   
  
      this.query=this.db.list('/users',ref => ref.orderByChild('userEmail').equalTo(this.userCheckEmail));
      this.query.valueChanges()
      .subscribe(data => {
                if(data[0])
                {
                  this.userPassword=data[0].userPassword;
                  if(this.userPassword == this.userCheckPassword)
                  {       
                    this.authService.authLogin();    
                    this.authService.setLoggedIn();
                    this.router.navigate(['\home']);
                  }
                  else{
                    alert("Incorrect Email or Password");
                  }
                }
                else{
                  alert("Incorrect Email or Password");
                }
          
     });  
    
   
 
//  console.log(this.userEmail);
//  console.log(this.userPassword)
}
  ngOnInit() {
    // let queryRef = this.usercollectionRef.where('state', '==', 'CA');
    if(sessionStorage.getItem('loggedIn') == 'true')
    { 
      alert("Already Logged In");
          this.router.navigate(['\home']);
    }


}

}
  // this.firebaseService.getUsersFromFirebase().snapshotChanges().forEach(usersSnapshot => {
    //   this.userList=[];
    //   usersSnapshot.forEach(userSnapshot =>{
    //       let user=userSnapshot.payload.toJSON();
    //       user['$key']=userSnapshot.key;
    //        this.userList.push(user as IUser);
    //        this.counter=this.userList.length;
      //      for(let i=0;i < this.userList.length; i++) 
      //      {
      //         this.userEmail=this.userList[i].userEmail.toString();
      //         this.userPassword=this.userList[i].userPassword.toString();
      //         if(this.userEmail === this.userCheckEmail  && this.userPassword === this.userCheckPassword)