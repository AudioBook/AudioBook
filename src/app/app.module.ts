import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SignUpComponent } from './sign-up/sign-up.component';
import { AudioService } from './audio.service';
import { PolicyFooterComponent } from './policy-footer/policy-footer.component';
import { AllModule } from './all/all.module';
=======
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { WhatIsAudibleComponent } from './what-is-audible/what-is-audible.component';
import { ShowCaseBooksComponent } from './show-case-books/show-case-books.component';
import { MembershipInfoComponent } from './membership-info/membership-info.component';
import { HowToStartComponent } from './how-to-start/how-to-start.component';
import { ListeneingIsEasyComponent } from './listeneing-is-easy/listeneing-is-easy.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { BookComponent } from './book/book.component';
import { BookImageComponent } from './book-image/book-image.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AudioService } from './audio.service';
import { PolicyFooterComponent } from './policy-footer/policy-footer.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { FreeTrailButtonComponent } from './free-trail-button/free-trail-button.component';
import { AuthenticationModule } from './authentication/authentication.module';
>>>>>>> 21286f2071117610cd5882c73a3a6b2d5ba3db2b

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SignUpComponent,
=======
    HomeComponent,
    HeaderComponent,
    WhatIsAudibleComponent,
    ShowCaseBooksComponent,
    MembershipInfoComponent,
    HowToStartComponent,
    ListeneingIsEasyComponent,
    FooterComponent,
    BookComponent,
    BookImageComponent,
    BookDetailsComponent,
>>>>>>> 21286f2071117610cd5882c73a3a6b2d5ba3db2b
    PolicyFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    AllModule
=======
    RatingModule,
    AuthenticationModule
>>>>>>> 21286f2071117610cd5882c73a3a6b2d5ba3db2b
  ],
  providers: [AudioService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
