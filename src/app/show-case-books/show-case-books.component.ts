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
  constructor(
    public _service: AudioService,
    private bookData: BookDataService) { }


  ngOnInit() {
    this.setUpBooks();
  }

  // 2nd way
  setUpBooks() {
    let books=this.bookData
    books.getAllBooks()
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
