import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { ShowHideDirective } from './show-hide.directive';



@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    ShowHideDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
