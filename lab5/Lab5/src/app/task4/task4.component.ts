import { Component } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'app-task4',
  standalone: true,
  imports: [],
  templateUrl: './task4.component.html',
  styleUrl: './task4.component.css'
})
export class Task4Component {
  author: Author = {
    name: 'Bill Gates',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/330px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg',
    biografy: 'William Henry Gates III (born October 28, 1955) is an American businessman, investor, philanthropist, and writer best known for co-founding the software company Microsoft with his childhood friend Paul Allen. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president, and chief software architect, while also being its largest individual shareholder until May 2014.[a] He was a pioneer of the microcomputer revolution of the 1970s and 1980s.'
  }
}
