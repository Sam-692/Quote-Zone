// import { Component, OnInit } from '@angular/core';
// import { Quote } from '../quote';

// @Component({
//   selector: 'app-quote',
//   templateUrl: './quote.component.html',
//   styleUrls: ['./quote.component.css']
// })
// export class QuoteComponent implements OnInit {

//   quotes:Quote[]=  [
//     new Quote(1, 'In the end, its not the years in your life that count. Its the life in your years. ', 'Abraham Lincoln',new Date(2020,3,14)),
//     // new Quote(2,'Life is inherently risky. There is only one big risk you should avoid at all costs, and that is the risk of doing nothing.','George Bernard Shaw',new Date(2016,6,9)),
//     new Quote(3,'Life isnt about finding yourself. Life is about creating yourself.','Denis Waitley',new Date(2010,4,12)),
//     new Quote(4,'I have found that if you love life, life will love you back.','Arthur Rubinstein',new Date(2012,7,29)),
//     new Quote(5,'We all have two lives. The second one starts when we realize we only have one.','Mtoto wa nursary',new Date(2000,2,29)),
//   ];

//   toggleDetails(index){
//     this.quotes[index].showDescription = !this.quotes[index].showDescription;
//   }

//   completeQuote(isComplete, index){
//     if (isComplete) {
//       this.quotes.splice(index,1);
//     }
//   }

//   addNewQuote(quote){
//     let quoteLength = this.quotes.length;
//     quote.id = quoteLength+1;
//     quote.quote= quote.quote;
//     quote.description= quote.description;
//     quote.postDate = new Date();
//     this.quotes.unshift(quote)
//   }
  
//   constructor() { }

//   ngOnInit() {
//   }

// }
