import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './http.service';
import { Good } from './good';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from './user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService, HttpClient]
})
export class AppComponent {
  title = 'lab9';
  goods!: Good[];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getGoods().subscribe(data => this.goods = data);
  }

  user: User = new User();

  addUser() {
    this.http.addUser(this.user);
  }

}
