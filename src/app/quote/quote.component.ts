
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  title = 'Welcome to Quotey quotes';
  quotes: Quotes[] = [
    new Quotes(1, 'Good things take time', 'Monica Masae', 'written by unknown'),
    new Quotes(2, 'Positivity always wins', 'Monica Masae', 'written by unknown'),
    new Quotes(3, 'The best is yet to come', 'Monica Masae', 'written by unknown'),
  ];

  toggleDetails(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
