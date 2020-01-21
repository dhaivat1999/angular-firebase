import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  opened=false;
  hide = true;
  submit(userForm)
    {
      console.log("Form Submitted",userForm);
    }
  constructor() { }

    
  ngOnInit() {
  }

}
