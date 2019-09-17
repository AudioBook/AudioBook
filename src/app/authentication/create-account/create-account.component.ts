import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
   name: any;
   email: any;
  password: any;
  c_password: any;
  constructor(public authService:AuthService) { }

  ngOnInit() {
  }
  createAccount()
  {
    console.log('giving data to service: ',this.name,this.email,this.password)
    if(this.password===this.c_password)
    {
      this.authService.createUser(this.name,this.email,this.password);
    }
  }
}
