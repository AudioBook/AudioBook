import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';
import { BookDataService } from '../services/book-data.service';

@Component({
  selector: 'app-show-case-books',
  templateUrl: './show-case-books.component.html',
  styleUrls: ['./show-case-books.component.css']
})
export class ShowCaseBooksComponent implements OnInit {
  // alternate variables start
  public allBooks;
  public displayedBooks;
// alternate variables end
  public books: Book[];
  constructor(
    public _service: AudioService,
    private bookData: BookDataService) { }


  ngOnInit() {
    console.log(this._service.getIndianBooks());
    this.books = this._service.getIndianBooks();
    this.setUpBooks();
  }

  public indianBooks(): void {
    this.books = this._service.getIndianBooks()
  }
  public internationalBooks(): void {
    this.books = this._service.getInternationalBooks()
  }
  public greatFirstListens(): void {
    this.books = this._service.getGreatFirstListens();
  }
  // 2nd way
  setUpBooks() {
    this.bookData.getAllBooks()
      .subscribe(data => {
        this.allBooks = data;
        this.switchBooks('indian');
      });
  }

  switchBooks(type: string) {
    switch (type) {
      case 'indian':
        this.displayedBooks = this.allBooks.indianBestSellers;
        break;
      case 'international':
        this.displayedBooks = this.allBooks.internationalBestSellers;
        break;
      case 'firsts':
        this.displayedBooks = this.allBooks.greatFirstListens;
        break;
    }
  }

}
