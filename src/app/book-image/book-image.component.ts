import { Component, OnInit, Input } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-book-image',
  templateUrl: './book-image.component.html',
  styleUrls: ['./book-image.component.css']
})
export class BookImageComponent implements OnInit {
  @Input() imageUrl:string;
  constructor(public audioService:AudioService) { }

  ngOnInit() {
  }


}
