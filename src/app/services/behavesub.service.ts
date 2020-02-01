import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirebaseServiceService } from './firebase-service.service';
import { IUser } from '../interfaces/users';
import { AngularFireDatabase, AngularFireList, snapshotChanges } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class BehavesubService {
  userList:IUser[];
  user:IUser[];
  gridSize=new BehaviorSubject(3);
  query:AngularFireList<any>;
  checker:string[];
  constructor(private firebaseService:FirebaseServiceService,private db:AngularFireDatabase) { }
  getUserKey(){
  // this.db.getUsersFromFirebase().snapshotChanges().forEach(usersSnapshot => {
  //   this.userList=[];
  //             usersSnapshot.forEach(userSnapshot =>{
  //       let user=userSnapshot.payload.toJSON();
  //       user['$key']=userSnapshot.key;
  //        this.userList.push(user as IUser)    
  //       });
  //     });
  // 

    }
    
}
