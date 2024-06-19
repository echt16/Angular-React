import { Component } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-task3',
  standalone: true,
  imports: [],
  templateUrl: './task3.component.html',
  styleUrl: './task3.component.css'
})
export class Task3Component {
  quotes: Quote[];
  constructor(){
    let quote1 = new Quote();
    quote1.author.name = 'Bill Gates';
    quote1.text = 'If you think your teacher is tough, wait till you get a boss';
    quote1.href = 'https://en.wikipedia.org/wiki/Bill_Gates';
    
    let quote2 = new Quote();
    quote2.author.name = 'Bill Gates';
    quote2.text = 'Life is not fair — get used to it!';
    quote2.href = ' https://www.gatesfoundation.org/';
    
    let quote3 = new Quote();
    quote3.author.name = 'Bill Gates';
    quote3.text = 'Success is a lousy teacher. It seduces smart people into thinking they can’t lose';
    quote3.href = 'https://www.gatesnotes.com/';

    let quote4 = new Quote();
    quote4.author.name = 'Bill Gates';
    quote4.text = 'Be nice to nerds. Chances are you’ll end up working for one';
    quote4.href = ' https://twitter.com/billgates';

    this.quotes = [quote1, quote2, quote3, quote4];
  }
}
