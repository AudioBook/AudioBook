import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  
  constructor(public httpClient:HttpClient) { }
  public getAllBooks()
  {
    return this.httpClient.get('./assets/mockData/allbooks.json');
  }
  
}
