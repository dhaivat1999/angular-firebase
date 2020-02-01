import { Component, OnInit } from '@angular/core';
import { IBook} from '../interfaces/users';
import { FirebaseServiceService } from '../services/firebase-service.service';
import { stringify } from '@angular/compiler/src/util';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList, snapshotChanges } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehavesubService } from '../services/behavesub.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.scss']
})
export class ShowBookComponent implements OnInit {
  book:IBook[]; 
  bookList:IBook[];
  query:AngularFireList<any>;
  gridSize:number;
  constructor(private firebaseService:FirebaseServiceService,private db:AngularFireDatabase,private behaveSub:BehavesubService,private router:Router) {}
  ngOnInit() {
     this.behaveSub.gridSize.subscribe((data)=>{
        this.gridSize=data;
   })
    this.query=this.db.list('/books',ref => ref.orderByKey().limitToFirst(this.gridSize));
    this.query.snapshotChanges().forEach(booksSnapshot =>{
        this.bookList=[];
        booksSnapshot.forEach(booksSnapshot => {
          let book=booksSnapshot.payload.toJSON();
          book['key']=booksSnapshot.key;
          this.bookList.push(book as IBook)
        })
    })
    this.router.navigate(['\home']);
    // .subscribe(data => {
    //             console.log(data[0].$key)
    //           if(data[0])
    //           {
    //             this.userPassword=data[0].userPassword;
    //             if(this.userPassword == this.userCheckPassword)
    //             {           
    //               this.authService.setLoggedIn();
    //               this.router.navigate(['\home']);
    //             }
    //             else{
    //               alert("Incorrect Email or Password");
    //             }
    //           }
    //           else{
    //             alert("Incorrect Email or Password");
    //           }
        
  //  });  
    // this.firebaseService.getBooksFromFirebase().snapshotChanges().forEach(booksSnapshot => {
    //   this.bookList=[];
    //             booksSnapshot.forEach(bookSnapshot =>{
    //       let book=bookSnapshot.payload.toJSON();
    //       book['$key']=bookSnapshot.key;
    //        this.bookList.push(book as IBook)          
    //   });
    // });
 
  }

}
