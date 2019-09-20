import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    SignUpComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    SignUpComponent,
    CreateAccountComponent
  ]
})
export class AuthenticationModule { }
