
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
    new Quotes(1, '"Good things take time"', 'Monica Masae', 'written by Unknown' , new Date (2021,6,18)),
    new Quotes(2, '"Positivity always wins"', 'Monica Masae', 'written by Unknown' , new Date (2022,9,0o2)),
    new Quotes(3, '"The best is yet to come"', 'Monica Masae', 'written by Unknown', new Date (2021,12,25)),
    
  ];

  toggleDetails(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
