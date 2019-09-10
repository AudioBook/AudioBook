import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private internationalBestSellers:Book[]=[
    {
      name:'A Brief History Of Human Kind',
      author:'Derek Perkins',
      rating:5.0,
      imageUrl:'https://m.media-amazon.com/images/I/41Xrn7ZtSuL._SL150_.jpg'
    },
    {
      name:'Becoming Michelle Obama',
      author:'Michelle Obama',
      rating:4.5,
      imageUrl:'https://m.media-amazon.com/images/I/41Y1DPGbDvL._SL150_.jpg'
    },
    {
      name:'Harry Potter and the Philosophers Stone',
      author:'Stephan Fry',
      rating:5,
      imageUrl:'https://m.media-amazon.com/images/I/61Nfa2cpWcL._SL150_.jpg'
    },
    {
      name:'Rich Dad Poor Dad',
      author:'Robert T Kiyosaki',
      rating:5.0,
      imageUrl:'https://m.media-amazon.com/images/I/51N2wpwLcVL._SL150_.jpg'
    },
    {
      name:'The Girl On The Train',
      author:'PAULA HAWKINS',
      rating:4,
      imageUrl:'https://m.media-amazon.com/images/I/51aRr7PajtL._SL150_.jpg'
    },
    {
      name:'Can\'t Hurt Me',
      author:'David Goggins',
      rating:4.5,
      imageUrl:'https://m.media-amazon.com/images/I/51Ln2UdUzhL._SL150_.jpg'
    }
  ]
  private indianBestSellers:Book[]=[
    {
      name:'my GITA',
      author:'Vivek Madan',
      rating:4.5,
      imageUrl:'https://m.media-amazon.com/images/I/41swLuC3X0L._SL150_.jpg'
    },
    {
      name:'The Heartful Way',
      author:'Joshua Pollock',
      rating:4.5,
      imageUrl:'https://m.media-amazon.com/images/I/41LZ48EqDQL._SL150_.jpg'
    },
    {
      name:'Harry Potter and the Philosophers Stone',
      author:'Stephan Fry',
      rating:5,
      imageUrl:'https://m.media-amazon.com/images/I/61Nfa2cpWcL._SL150_.jpg'
    },
    {
      name:'SITA',
      author:'Sagar Arya',
      rating:4.5,
      imageUrl:'https://m.media-amazon.com/images/I/611zr4B5udL._SL150_.jpg'
    },
    {
      name:'The Monk Who Sold His Ferrari',
      author:'Robin Sharma',
      rating:4.6,
      imageUrl:'https://m.media-amazon.com/images/I/51AAweqxA1L._SL150_.jpg'
    },
    {
      name:'A Suitable Boy',
      author:'Vikram Seth',
      rating:4.5,
      imageUrl:'https://m.media-amazon.com/images/I/61Ya+T60dGL._SL150_.jpg'
    }
  ]
  constructor() { }
  public getInternationalBooks():Book[]
  {
    return this.internationalBestSellers;
  }
  public getIndianBooks():Book[]
  {
    return this.indianBestSellers;
  }
}
