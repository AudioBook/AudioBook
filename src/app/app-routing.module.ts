import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { CreateAccountComponent } from './authentication/create-account/create-account.component';
import { UserProfileComponent } from './all/user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { DownloadAppComponent } from './download-app/download-app.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'createAccount',
    component:CreateAccountComponent
  },
  {
    path:'app',
    component:DownloadAppComponent
  },
  {
    path:'userProfile',
    component:UserProfileComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
