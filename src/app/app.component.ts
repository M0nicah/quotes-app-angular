import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quotes: String[];

  constructor(){
    this.quotes = ['Good things take time', 'Positivity always wins', 'The best is yet to be']
  }
}


