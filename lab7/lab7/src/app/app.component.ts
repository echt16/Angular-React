import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { info } from './info';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

  export class AppComponent {
    text: string = "";
    changeText(i: number) {
      this.text = info[i];
    }
  }
