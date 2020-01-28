import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { FirebaseServiceService } from './../services/firebase-service.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  opened=false;
  hide = true;
  userGender:String;
  genders:String[];
 userForms:String[]
  constructor(private FirebaseServiceService:FirebaseServiceService,private router:Router) { }
  submit(userForm)
  {
    this.userForms=userForm.value;
    // this.router.navigate(['/auth'] );
    console.log("Form Submitted",userForm);
    this.FirebaseServiceService.addUserToFirebase(userForm.value);
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    this.genders=['Male','Female','Other'];
  }

}
