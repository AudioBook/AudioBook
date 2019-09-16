import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public userId:string;
  public password:string;
  constructor(public auth:AuthService) {}

  ngOnInit() {}

  login()
  {
    //console.log(typeof(this.userId))
  this.auth.login(this.userId,this.password)
  
  }
}
