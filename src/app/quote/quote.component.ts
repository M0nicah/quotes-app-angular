
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Welcome to Quotey quotes';
  quotes: Quotes[] = [
    {quote: 'Good things take time', author: 'Monica Masae' },
    {quote: 'Positivity always wins',author: 'Monica Masae' },
    {quote: 'The best is yet to come', author: 'Monica Masae' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
