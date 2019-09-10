import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-show-case-books',
  templateUrl: './show-case-books.component.html',
  styleUrls: ['./show-case-books.component.css']
})
export class ShowCaseBooksComponent implements OnInit {

  public books:Book[]
  constructor(public _service:AudioService) { }
  

  ngOnInit() {
    console.log(this._service.getIndianBooks());
    this.books=this._service.getIndianBooks();
  }
  public indianBooks():void
  {
    this.books=this._service.getIndianBooks()
  }
  public internationalBooks():void
  {
    this.books=this._service.getInternationalBooks()
  }

}
