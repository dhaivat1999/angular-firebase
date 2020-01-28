import { Component, OnInit } from '@angular/core';
import { WindowService } from '../services/window.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.scss']
})

export class PhoneLoginComponent implements OnInit {
  country:number;
  phnNumber:number;
  windowRef: any;
  verificationCode: string;
  user: any;

  get e164() {
    const num = this.country + this.phnNumber
    return `+${num}`
  }
  
  // const num = this.country + this.phnNumber;
  // return `+${num}`;
  constructor(private win: WindowService,private router:Router) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
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
    .catch( error => console.log(error, "Incorrect code entered?"));
  }

}
