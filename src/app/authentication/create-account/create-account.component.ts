import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(public authService:AuthService,public formBuilder:FormBuilder) { }
  public createAccountForm=this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]],
    c_password:['',[Validators.required,Validators.minLength(5)]]
  })
  ngOnInit() {
  }
  createAccount()
  {
    let name=this.createAccountForm.controls['name'].value
    let email=this.createAccountForm.controls['email'].value
    let password=this.createAccountForm.controls['password'].value
    let c_password=this.createAccountForm.controls['c_password'].value
    console.log('giving data to service: ',name,email,password)
    if(password===c_password)
    {
      this.authService.createUser(name,email,password);
    }
  }
}
