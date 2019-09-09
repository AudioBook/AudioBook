import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { WhatIsAudibleComponent } from './what-is-audible/what-is-audible.component';
import { ShowCaseBooksComponent } from './show-case-books/show-case-books.component';
import { MembershipInfoComponent } from './membership-info/membership-info.component';
import { HowToStartComponent } from './how-to-start/how-to-start.component';
import { ListeneingIsEasyComponent } from './listeneing-is-easy/listeneing-is-easy.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WhatIsAudibleComponent,
    ShowCaseBooksComponent,
    MembershipInfoComponent,
    HowToStartComponent,
    ListeneingIsEasyComponent,
    FooterComponent,
    SignUpComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
