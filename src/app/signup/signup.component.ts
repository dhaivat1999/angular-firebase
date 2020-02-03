import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { FirebaseServiceService } from './../services/firebase-service.service';
import {Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { BehavesubService } from '../services/behavesub.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  opened=false;
  hide = true;
  hide1=true;
  userGender:String;
  genders:String[];
 userForms:String[];
  userCheckEmail:string;
  checker:boolean;
  flags:boolean;
  query:AngularFireList<any>;
  counter:number;
  constructor(private FirebaseServiceService:FirebaseServiceService,private router:Router,private db:AngularFireDatabase,private behave:BehavesubService) { }
  submit(userForm)
  {
        // console.log(data.length)
              // this.checkUserExists(userForm.value.userEmail);
                  
              if(userForm.value.userPassword === userForm.value.userConfirmPassword )
              {
                this.counter=0;
                this.checkUserExists(userForm.value.userEmail);
                if(this.flags ==true)
                {
                this.behave.getUserKey(userForm.value.userEmail);
                this.FirebaseServiceService.addUserToFirebase(userForm.value);
                this.counter=1;
                this.router.navigate(['\auth']);
                }
                // this.router.navigate(['\auth'],{queryParams: {delEmail:userForm.value.userEmail}});
              }
              else
              {
                  alert("Passwords do not match");
              }
       
    
    }
    checkUserExists(email:string)
   {
    this.query=this.db.list('/users',ref => ref.orderByChild('userEmail').equalTo(email));
    this.query.valueChanges()
    .subscribe(data => {
      if(data.length == 0)
      {
        this.flags=true;
      }
      else if(this.counter == 0){
        this.flags=false;
        alert("User email already exists, please use another email");
        this.router.navigate(['\home']);
      }
   });
}
tryingOtp(){
//   this.query=this.db.list('/users',ref => ref.orderByChild('userEmail').equalTo(email));
//   this.query.snapshotChanges().forEach(booksSnapshot =>{
//     this.userList=[];
//     booksSnapshot.forEach(booksSnapshot => {
//       let book=booksSnapshot.payload.toJSON();
//       book['key']=booksSnapshot.key;
//       this.userList.push(user as IUser)
//     })
// })
}
  

  ngOnInit() {
    this.genders=['Male','Female','Other'];
  }

}
