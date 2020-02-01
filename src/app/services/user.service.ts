import { Injectable } from '@angular/core';
import {IUser } from './../interfaces/users';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) {}

  getAllposts(){
    return this.http.get('https://jsonplaceholder.typicode.csom/posts', {responseType:'json'})
    .pipe(
        catchError(this.handleError)
    )
  }
  handleError(error:HttpErrorResponse){
    console.log(error);
     return throwError(error);
  }
   
}
