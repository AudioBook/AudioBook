import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  public audioUrlSub=new BehaviorSubject('xxx')//initializing to sequence 'xxx' so that audio component knows not to play
  public currentAudioUrl=this.audioUrlSub.asObservable()
  
  constructor(private httpClient: HttpClient) {
  }

  getAllBooks() {
    return this.httpClient.get('./assets/mockData/allbooks.json');
  }

  changeAudioUrl(url:string)
  {
    this.audioUrlSub.next(url)
  }
}
