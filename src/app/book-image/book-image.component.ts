import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-image',
  templateUrl: './book-image.component.html',
  styleUrls: ['./book-image.component.css']
})
export class BookImageComponent implements OnInit {
  @Input() imageUrl:string;
  constructor() { }

  ngOnInit() {
  }

}
