import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { config } from '../app.config';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  public audioUrlSub=new BehaviorSubject('xxx')//initializing to sequence 'xxx' so that audio component knows not to play
  public currentAudioUrl=this.audioUrlSub.asObservable()
  public fbooks:AngularFirestoreCollection<Book>
  public fbookDoc:AngularFirestoreDocument<Book>;
  constructor(private httpClient: HttpClient,
    private firebaseDb:AngularFirestore) {
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
}
