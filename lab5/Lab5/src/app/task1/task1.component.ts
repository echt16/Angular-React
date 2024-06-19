import { Component } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css'
})
export class Task1Component {
  quote: Quote = {
    author:{
      name:'Bill Gates',
      biografy: null,
      imgSrc:null
    },
    text: 'Patience is a key element of success',
    href: null
  }
}
