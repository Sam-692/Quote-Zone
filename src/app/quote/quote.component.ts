import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=  [
    new Quote(1, 'In the end, its not the years in your life that count. Its the life in your years. ', 'Abraham Lincoln',new Date(2020,3,14)),
    new Quote(2,'Life isnt about finding yourself. Life is about creating yourself.','Denis Waitley',new Date(2010,4,12)),
    new Quote(3,'I have found that if you love life, life will love you back.','Arthur Rubinstein',new Date(2012,7,29)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.quote= quote.quote;
    quote.description= quote.description;
    quote.postDate = new Date();
    this.quotes.unshift(quote)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
