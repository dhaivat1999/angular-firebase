import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { IUser } from './../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  private userList:AngularFireList<any>;
  constructor(
    private firebase: AngularFireDatabase
  ) {
    this.userList=this.firebase.list('users');
   }
   getUsersFromFirebase(){
     return this.userList;
   }
   addUserToFirebase(user:IUser)
   {
     console.log("new log for firebase");
     this.userList.push(user); 
   }
   updateUserOnFirebase(user: IUser)
   {
     let $key=user.$key;
     this.userList.update($key,user);
   }
   deleteAUserFromFirebase($key:string)
   {
      this.userList.remove($key);
   }
}
