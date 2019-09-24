import { Component, OnInit, Input } from '@angular/core';
import { BookDataService } from '../services/book-data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book;
  playing:boolean=false
  btnTxt:string='Play'
  constructor(public bookData:BookDataService,
    public authService:AuthService
    ) {}

  ngOnInit() {
  }

  play()
  {
    if(this.playing)//if already playing then the audio has to be paused
    {
      this.bookData.changeAudioUrl('xxx')// providing 'xxx' sequence as url so that audio component knows to pause the audio
      this.btnTxt='Play'
      this.playing=false
    }
    else{
      this.bookData.changeAudioUrl(this.book.sampleAudioUrl)
      this.btnTxt='Pause'
      this.playing=true
    }
   
  }

  addToLibrary()
  {
    this.bookData.addBookToUserLibrary(this.book.id);
  }

}
