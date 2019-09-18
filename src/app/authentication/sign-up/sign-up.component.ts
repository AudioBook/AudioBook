import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {Validators} from '@angular/forms'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(public auth:AuthService,public formBuilder:FormBuilder) {}
  public loginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]]
  })
  ngOnInit() {}

  login()
  {
    console.log('login')
    this.auth.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value)
  }
}
