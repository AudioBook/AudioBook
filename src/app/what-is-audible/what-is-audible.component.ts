import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-is-audible',
  templateUrl: './what-is-audible.component.html',
  styleUrls: ['./what-is-audible.component.css']
})
export class WhatIsAudibleComponent implements OnInit {
  public elements=[
    {"imgurl":'https://m.media-amazon.com/images/G/31//AudibleIN/2018/audibleweb/October/devices_icons_audible_orange._CB1198675309_.svg',
  "heading":"Listen anywhere, anytime",
  "desc":"Listen to your favourite books wherever you are with the free Audible app - in a car, on a run or even when ironing!"
  },
  {
    "imgurl":'https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/landing/002_WhatIsAudible_icon2_mr3.svg',
    "heading":"World-class narrations",
    "desc":"Great books narrated by great performers.With over 200,000 audiobooks, you are sure to find the perfect listen."
  },
  {
    "imgurl":'http://localhost:4200/assets/images/amazon.svg',
    "heading":"An amazon company",
    "desc":"Audible is a trusted Amazon company with millions of users globally so you can count on privacy, security and satisfaction."
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
