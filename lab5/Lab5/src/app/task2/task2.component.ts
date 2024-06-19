import { Component } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css'
})
export class Task2Component {
  quotes: Quote[];
  constructor(){
    let quote1 = new Quote();
    quote1.author.name = 'Bill Gates';
    quote1.text = 'If you think your teacher is tough, wait till you get a boss';
    
    let quote2 = new Quote();
    quote2.author.name = 'Bill Gates';
    quote2.text = 'Life is not fair — get used to it!';
    
    let quote3 = new Quote();
    quote3.author.name = 'Bill Gates';
    quote3.text = 'Success is a lousy teacher. It seduces smart people into thinking they can’t lose';
    
    let quote4 = new Quote();
    quote4.author.name = 'Bill Gates';
    quote4.text = 'Be nice to nerds. Chances are you’ll end up working for one';
    
    this.quotes = [quote1, quote2, quote3, quote4];
  }
}
