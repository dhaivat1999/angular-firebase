import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { IUser } from './../interfaces/users';
import { UserService } from '../services/user.service';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  user:IUser[]; 
  userList:IUser[];
  userArray:String[];
  loggedOut(){
    sessionStorage.removeItem('loggedIn');
  }
  getUserName(){
        this.firebaseService.getUsersFromFirebase().snapshotChanges().forEach(usersSnapshot => {
          this.userList=[];
                    usersSnapshot.forEach(userSnapshot =>{
              let user=userSnapshot.payload.toJSON();
              user['$key']=userSnapshot.key;
               this.userList.push(user as IUser);
            console.log( this.userList[0].userEmail);
          });
        });
       
  }
  checkLogin:boolean;
 // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private firebaseService: FirebaseServiceService,private authService:AuthService) {  
   
  }  
  ngOnInit() {
      // this.users=this.userService.getUsers();
      // console.log(this.users);
      this.checkLogin=this.authService.isLoggedIn;
  }

}
