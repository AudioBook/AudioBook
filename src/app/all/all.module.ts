import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { HowToStartComponent } from '../how-to-start/how-to-start.component';
import { WhatIsAudibleComponent } from '../what-is-audible/what-is-audible.component';
import { ShowCaseBooksComponent } from '../show-case-books/show-case-books.component';
import { BookComponent } from '../book/book.component';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookImageComponent } from '../book-image/book-image.component';
import { MembershipInfoComponent } from '../membership-info/membership-info.component';
import { ListeneingIsEasyComponent } from '../listeneing-is-easy/listeneing-is-easy.component';
import { HomeFooterComponent } from '../home-footer/home-footer.component';
import { FooterComponent } from '../footer/footer.component';
import { FreeTrailButtonComponent } from '../free-trail-button/free-trail-button.component';
import { ButtonComponent } from '../button/button.component';
import { RatingModule } from 'ng-starrating';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent,HeaderComponent,
    WhatIsAudibleComponent,ShowCaseBooksComponent,
    BookComponent,BookDetailsComponent,
    BookImageComponent,MembershipInfoComponent,
    HowToStartComponent,ListeneingIsEasyComponent,
    HomeFooterComponent,FooterComponent,
    FreeTrailButtonComponent,ButtonComponent],
  imports: [
    CommonModule,
    RatingModule,
    RouterModule
  ],
  exports: [HomeComponent,HeaderComponent,
    WhatIsAudibleComponent,ShowCaseBooksComponent,
    BookComponent,BookDetailsComponent,
    BookImageComponent,MembershipInfoComponent,
    HowToStartComponent,ListeneingIsEasyComponent,
    HomeFooterComponent,FooterComponent,
    FreeTrailButtonComponent,ButtonComponent]
})
export class AllModule { }
