import { Component, OnInit } from '@angular/core';
import { BookDataService } from 'src/app/services/book-data.service';

@Component({
  selector: 'app-your-library',
  templateUrl: './your-library.component.html',
  styleUrls: ['./your-library.component.css']
})
export class YourLibraryComponent implements OnInit {  
  
  public userBooks=[];
  public fBooks:Book[]=[]
  public displayBooks:Book[]=[]
  constructor(
    public bookDataService:BookDataService
  ) { }

  ngOnInit() {
    this.bookDataService.getBookIdsFromUserLibrary();
    console.log(this.bookDataService.userBookIds)
    this.bookDataService.getAllBooksFromFirebase().then(books=>{
      for(let bookraw of books)
      {
        let book:Book=bookraw.payload.doc.data()
        book.id=bookraw.payload.doc.id
        this.fBooks.push(book)
      }
      this.displayBooks=this.fBooks
    })
  }
  
  switchBooks(cat:string)
  {
    switch(cat)
    {
      case 'allBooks':
        this.displayBooks=this.fBooks
        break
      case 'userBooks':
        this.displayBooks=this.bookDataService.userBooks
        break
    }
  }
  
}
