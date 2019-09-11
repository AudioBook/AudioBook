  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioService } from './audio.service';
import { PolicyFooterComponent } from './policy-footer/policy-footer.component';
import { AllModule } from './all/all.module';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PolicyFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllModule
  ],
  providers: [AudioService],
  bootstrap: [AppComponent]
})
export class AppModule { }