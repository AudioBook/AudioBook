import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public signBtnTxt:string
  public signRouterLink:string
  public signedIn:boolean

  constructor(public auth:AuthService) { 
  }

  ngOnInit() {
    console.log('initialized')
    if(this.auth.loggedIn)
    {
      this.signBtnTxt='Sign Out'
      this.signRouterLink=''

    }
    else{
      this.auth.logout()
      console.log('logged out')
      this.signBtnTxt='Sign In'
      this.signRouterLink='/signUp'
    }
  }
  signBtnOnClick()
  {
    if(this.auth.loggedIn)
    {
      this.auth.logout();
      console.log('logged out')
      this.signBtnTxt='Sign In'
      this.signRouterLink='/signUp'
    }
  }


}
