import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn=false
  public user:User;
  public displayName:string;
  public userId:string;
  constructor(public http:HttpClient,
     public router:Router,
      private firebaseAuth:AngularFireAuth,
      private firebaseDb:AngularFirestore)
       { 
         if(localStorage.getItem('userId')){
           this.loggedIn=true
           this.userId=localStorage.getItem('userId')
           this.displayName=localStorage.getItem('displayName')
         }
        this.firebaseAuth.user.subscribe(user=>{
          if(user)
          {
            this.user=user
            console.log(user)
          }
        }
        )
      }
  public login(email,password)
  {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email,password).then(userCredential=>
      {
        if(userCredential){
          this.loggedIn=true
          this.router.navigateByUrl('/userProfile')
          this.user=userCredential.user
          this.userId=userCredential.user.uid
          this.displayName=userCredential.user.displayName
          localStorage.setItem('displayName',userCredential.user.displayName)
          localStorage.setItem('userId',userCredential.user.uid)
        }
      }).catch(error=>alert(error))
  }
  public logout()
  {
    this.loggedIn=false
    localStorage.removeItem('userId')
    localStorage.removeItem('displayName')
    this.firebaseAuth.auth.signOut()
  }

  createUser(name,email,password)//adds or creates authentication in firebase for user
   {
    this.firebaseAuth.auth.createUserWithEmailAndPassword( email, password)
      .then( userCredential => {
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName:name
        });

        this.insertUserData(userCredential,name,email,password)
          .then(() => {
            this.login(email,password);
            this.router.navigate(['']);
          });
      })
      .catch( error => {
        console.log('error in creating user')
        alert('error try again')
        //this.eventAuthError.next(error);
      });
  }
  insertUserData(userCredential: firebase.auth.UserCredential,name,email,password) {
    return this.firebaseDb.doc(`Users/${userCredential.user.uid}`).set({
      email: email,
      name: name
    })
  }
  public getUserState()
  {
    this.firebaseAuth.authState;
  }
}
