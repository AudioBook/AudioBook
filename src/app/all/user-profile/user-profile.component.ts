import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public displayName:string;
  constructor(public auth:AuthService) { 
  this.displayName=this.auth.displayName;
  }

  ngOnInit() {
  }

}
