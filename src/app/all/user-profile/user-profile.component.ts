import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userName:string;
  constructor(public auth:AuthService) { 
    this.userName=this.auth.userId;
  }

  ngOnInit() {
  }

}
