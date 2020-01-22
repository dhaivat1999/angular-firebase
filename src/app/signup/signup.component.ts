import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { FirebaseServiceService } from './../services/firebase-service.service';
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
 
  constructor(private FirebaseServiceService:FirebaseServiceService) { }
  submit(userForm)
  {
    console.log("Form Submitted",userForm);
    this.FirebaseServiceService.addUserToFirebase(userForm.value);
  }

  ngOnInit() {
    this.genders=['Male','Female','Other'];
  }

}
