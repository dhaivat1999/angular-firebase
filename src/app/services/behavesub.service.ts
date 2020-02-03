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
  userKey=new BehaviorSubject('');
  query:AngularFireList<any>;
  checker:string[];
  userCheckEmail:string;
  // userCheckEmail:string;
  constructor(private firebaseService:FirebaseServiceService,private db:AngularFireDatabase) { }
  getUserKey(userCheckEmail){
    this.userCheckEmail=userCheckEmail;
    this.query=this.db.list('/users',ref => ref.orderByChild('userEmail').equalTo(this.userCheckEmail));
    this.query.snapshotChanges().forEach(usersSnapshot =>{
      this.userList=[];
      usersSnapshot.forEach(userSnapshot => {
        let user=userSnapshot.payload.toJSON();
        user['key']=userSnapshot.key;
        this.userList.push(user as IUser)
        console.log(userSnapshot.key)
        this.userKey.next(userSnapshot.key);
      })
  })

    }
    
}
