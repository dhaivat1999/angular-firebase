import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { IUser } from './../interfaces/users';
import { UserService } from '../services/user.service';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  users:IUser[]; 
  userName:String;
  getUserName(){
        this.firebaseService.getUsersFromFirebase().snapshotChanges().forEach(usersSnapshot => {
          usersSnapshot.forEach(userSnapshot =>{
              let user=userSnapshot.payload.toJSON();
              user['$key']=userSnapshot.key;
              this.userName=user['userFirstName'];
          });
        });
  }
 // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private firebaseService: FirebaseServiceService) {  
   
  }  
  ngOnInit() {
      // this.users=this.userService.getUsers();
      // console.log(this.users);

  }

}
