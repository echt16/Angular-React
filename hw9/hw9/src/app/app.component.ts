import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Root } from './film/root';
import { OnInit } from '@angular/core';
import { FilmService } from './film-import.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient, FilmService]
})
export class AppComponent {
  title = 'hw9';

  constructor(private filmService: FilmService) { }

  root: Root = new Root();

  limit: number = 10;

  page: number = 1;

  name: string = '';

  error: boolean = false;

  notFound: boolean = false;

  searchFilm() {
    this.filmService.getFilms(this.name, this.limit, this.page).subscribe(data => {
      this.root = data; if (!this.root) {
        this.error = true;
      }
      else {
        this.error = false;
        if (typeof (this.root.docs) == 'undefined' || this.root.docs.length == 0) {
          this.notFound = true;
        }
        else {
          this.notFound = false;
        }
      }
    });
  }
}
