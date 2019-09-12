  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioService } from './audio.service';
import { AllModule } from './all/all.module';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    AllModule
  ],
  providers: [AudioService],
  bootstrap: [AppComponent]
})
export class AppModule { }