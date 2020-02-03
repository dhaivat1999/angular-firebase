import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { IUser,IBook } from './../interfaces/users';
import {AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  flags:boolean;
  strreturn:string;
  private userList:AngularFireList<any>;
  private bookList:AngularFireList<any>;
  query:AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase){
    this.userList=this.firebase.list('users');
    this.bookList=this.firebase.list('books');
   }
   getUsersFromFirebase(){
     return this.userList;
   }
   addUserToFirebase(user:IUser)
   {
    // console.log("new log for firebase");
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
   addBookToFirebase(book:IBook)
   {
     this.bookList.push(book);
   }
   getBooksFromFirebase(){
     return this.bookList;
   }
   
}

