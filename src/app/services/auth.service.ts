import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn=false
    public userId:string=''
  constructor(public http:HttpClient, public router:Router) { }
  public login(userId,password)
  {
    return this.http.get('./assets/mockData/credentials.json').subscribe((credentials:[])=>{
      for(var row of credentials)
      {
        //console.log(row)
        if(row['userId']==userId&&row['password']==password)
        {
          this.loggedIn=true
          this.userId=userId
          console.log('loggedIn')
          this.router.navigateByUrl('/userProfile');
        }
      }
    })
  }
  public logout()
  {
    this.loggedIn=false
    this.userId=null
  }
}
