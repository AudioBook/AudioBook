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

  constructor(public auth:AuthService) { 
  }

  ngOnInit() {
    if(this.auth.loggedIn)
    {
      this.signBtnTxt='Sign Out'
      this.signRouterLink=''

    }
    else{
      this.signBtnTxt='Sign In'
      this.signRouterLink='/signUp'
    }
  }
  signOut()
  {
    if(this.auth.loggedIn)
    {
      this.auth.logout();
      this.signBtnTxt='Sign In'
      this.signRouterLink='/signUp'
    }
  }


}
