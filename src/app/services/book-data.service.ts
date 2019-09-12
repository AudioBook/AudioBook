import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  constructor(private httpClient: HttpClient) {
  }

  getAllBooks() {
    return this.httpClient.get('./assets/mockData/allbooks.json');
  }
}
