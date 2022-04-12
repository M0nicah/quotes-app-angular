import { Directive, ElementRef, Host, HostListener } from '@angular/core';
import { count } from 'console';
import { hostname } from 'os';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  colors=[
    'blue', 'yellow', 'red', 'green', 'brown'
  ];

  @HostListener('click') newColor(){
    
  }

  constructor(private elem:ElementRef) { 

  }

}
