import { Component, OnInit } from '@angular/core';
import { WindowService } from '../services/window.service';
import * as firebase from 'firebase';
import { Router, ActivatedRoute,NavigationStart } from '@angular/router';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { map } from "rxjs/operators";
 import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BehavesubService } from '../services/behavesub.service';
@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.scss']
})

export class PhoneLoginComponent implements OnInit {
  state$:Observable<any>;
  country:string;
  phnNumber:string;
  windowRef: any;
  verificationCode: string;
  user: any;
  userEmail:string;
  userKey:string;
  // product;
  order: string;
  get e164() {
    const num = this.country + this.phnNumber
    return `+${num}`
  }
  
  // const num = this.country + this.phnNumber;
  // return `+${num}`;
  constructor(private win: WindowService,private router:Router,private firebaseService:FirebaseServiceService,public route: ActivatedRoute,private behave:BehavesubService) {
   }

  ngOnInit() {

    this.behave.userKey
    .subscribe((data)=>{
      this.userKey=data;
 })
 this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render() 
}


 sendLoginCode() {

  const appVerifier = this.windowRef.recaptchaVerifier;
  console.log(this.country)
  console.log(this.phnNumber)
  const num = this.e164;

  firebase.auth().signInWithPhoneNumber(num, appVerifier)
          .then(result => {
              this.windowRef.confirmationResult = result;
          })
          .catch( error => console.log(error) );

}

verifyLoginCode() {
  this.windowRef.confirmationResult
                .confirm(this.verificationCode)
                .then( result => {
                this.router.navigate(['\home'])
                  // this.user = result.user;

  })
  .catch(
    this.firebaseService.deleteAUserFromFirebase(this.userKey),
    alert("Incorrect OTP entered Please Signup again"),
    this.router.navigate(['signup']),

  );
}

}
