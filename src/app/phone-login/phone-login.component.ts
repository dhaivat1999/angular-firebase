import { Component, OnInit } from '@angular/core';
import { WindowService } from '../services/window.service';
import * as firebase from 'firebase';
import { Router, ActivatedRoute,NavigationStart } from '@angular/router';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { map } from "rxjs/operators";
 import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.scss']
})

export class PhoneLoginComponent implements OnInit {
  state$:Observable<any>;
  country:number;
  phnNumber:number;
  windowRef: any;
  verificationCode: string;
  user: any;
  userEmail:string;
  
  // product;
  order: string;
  get e164() {
    const num = this.country + this.phnNumber
    return `+${num}`
  }
  
  // const num = this.country + this.phnNumber;
  // return `+${num}`;
  constructor(private win: WindowService,private router:Router,private firebaseService:FirebaseServiceService,public route: ActivatedRoute) {
   }

  ngOnInit() {
    // this.route.queryParams
    // .subscribe(params.delEmail => {
    //   this.userEmail = params.delEmail;
    //   console.log(this.userEmail); // popular 
    // });
    this.route.queryParams.subscribe(params => {
      this.userEmail=params.delEmail;
  })    
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
    this.windowRef.recaptchaVerifier.render();
    // this.state$ = this.activatedRoute.paramMap
    // .pipe(map(() => window.history.state))
    // console.log(this.state$[0].delEmail.data);
    
      // this.product=history.state;
     
  
    
  }
  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

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
                    console.log("User Verified");
                    this.router.navigate(['\home']);

    })
    .catch( 
        this.firebaseService.deleteAUserFromFirebase(this.userEmail)
        );
  }

}
