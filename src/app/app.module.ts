
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioService } from './audio.service';
import { AllModule } from './all/all.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AllModule,
    AuthenticationModule,
    RouterModule
  ],
  providers: [AudioService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }