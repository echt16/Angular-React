import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Task1Component, Task2Component, Task3Component, Task4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab5';
}
