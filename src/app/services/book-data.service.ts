import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { config } from '../app.config';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  public audioUrlSub=new BehaviorSubject('xxx')//initializing to sequence 'xxx' so that audio component knows not to play
  public currentAudioUrl=this.audioUrlSub.asObservable()
  public fbooks:AngularFirestoreCollection<Book>
  public fbookDoc:AngularFirestoreDocument<Book>;
  public userBookIds:string[]=[];
  public userBooks:any=[];

  constructor(private httpClient: HttpClient,
    private firebaseDb:AngularFirestore,
    public authService:AuthService
    ) {
      this.fbooks=firebaseDb.collection<Book>(config.collection_endpoint)
  }

  getAllBooks() {
    return this.httpClient.get('./assets/mockData/allbooks.json');
  }

  changeAudioUrl(url:string)//gives audio url to audio player component
  {
    this.audioUrlSub.next(url)
  }
  
  addBook(book:Book)//adds book to firebase
  {
    this.fbooks.add(book).then(msg=>console.log(msg))
  }
  
  getAllBooksFromFirebase()
  {
    return new Promise<any>((resolve,reject)=>{
      this.firebaseDb.collection('/books').snapshotChanges().subscribe(book=>{
        resolve(book)
      })
    })
  }

  addBookToUserLibrary(bookId:string)
  {
    new Promise<string[]>((resolve,reject)=>{
      this.firebaseDb.collection(`/Users/`).doc(`${this.authService.userId}`).snapshotChanges().subscribe(data=>{
        console.log('changed1')
        resolve(data.payload.get('library'))
      })
    })
    .then(bookIds=>{
      console.log('changed2')
      if(bookIds==undefined)//if the library is empty returns undefined. so initialize it.
        bookIds=[]
      bookIds.push(bookId)
      
      this.firebaseDb.collection(`/Users/`).doc(`${this.authService.userId}`).update({
        library:Array.from(new Set(bookIds))//converting into set and then converting to array to remove duplicates
      })
    }).then(msg=>{
      alert(`successfully added`)
    }).catch(err=>{
      console.log(err)
    })
  }

  getBookIdsFromUserLibrary()//called by yourlibrary component on its instantiation. stores a list of user's book ids.
  {
    this.firebaseDb.collection('/Users/').doc(`${this.authService.userId}`).snapshotChanges().subscribe(data=>{
      let library=data.payload.get('library')
      if(library==undefined)library=[]
      this.userBookIds=library
      this.userBooks=[];//emptying
      for(let bookId of library)
      {
        this.getBookById(bookId).then(bookPayload=>{
          this.userBooks.push({
            author:bookPayload.get('author'),
            imageUrl:bookPayload.get('imageUrl'),
            name:bookPayload.get('name'),
            sampleAudioUrl:bookPayload.get('sampleAudioUrl'),
            rating:bookPayload.get('rating')
           })
        })
      }
    })
  }

  getBookById(bookId:string)
  {
    return new Promise<any>((resolve,reject)=>{
      this.firebaseDb.collection('/books/').doc(bookId).snapshotChanges().subscribe(data=>{
        /*book.author=data.payload.get('author')
        book.id=data.payload.get('id')
        book.imageUrl=data.payload.get('imageUrl')
        book.name=data.payload.get('name')
        book.sampleAudioUrl=data.payload.get('sampleAudioUrl')*/
        resolve(data.payload)
      })
    })
  }
}
