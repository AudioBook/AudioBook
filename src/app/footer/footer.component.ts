import { Component, OnInit } from '@angular/core';
import { FooterItem } from '../models/footerItems';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerContent = [];

  constructor() { }

  ngOnInit() {
    this.setUpFooterContent();
  }

  setUpFooterContent() {
    this.footerContent = [
      '© 1997-2019, Audible, Inc. or its affiliates',
      'Conditions of Use',
      'Privacy Notice',
      'Help',
      'Contact Us',
      'India (English)'
    ].map(item => new FooterItem(item));
  }

}
