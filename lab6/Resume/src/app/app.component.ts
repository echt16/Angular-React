import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Person } from './person';
import { person } from './person-item';
import { ResumeServices } from './resume-services';
import { MainInfoComponent } from './main-info/main-info.component';
import { JobPlace } from './job-place';
import { Hobby } from './hobby';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MainInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  person: Person = person;
  services: ResumeServices = new ResumeServices(person);
  jobPlaces: JobPlace[] = this.services.getJobPlaces();

  hobbies: Hobby[] = [
    new Hobby('football', 'Футбо́л (англ. football от foot «ступня» + ball «мяч») — командный вид спорта, в котором целью является забить мяч в ворота соперника ногами или другими частями тела (кроме рук) большее количество раз, чем команда соперника. В настоящее время самый популярный и массовый вид спорта в мире', 'https://s.ill.in.ua/i/news/630x373/455/455371.jpg', 'https://s.ill.in.ua/i/custom/1024x0/63760/63760975455820.jpg'),
    new Hobby('basketball', 'Баскетбо́л (англ. basketball від basket — «кошик» і ball — «мяч»; заст., діал. кошикі́вка[1][2][3][4] або коші́вка[5][6]) — спортивна командна гра з мячем, який закидають руками в кільце із сіткою (кошик), закріпленою на щиті на висоті 3 метри 5 сантиметрів (10 футів) над майданчиком. Баскетбол є олімпійським видом спорту.', 'https://kingsquaresportscentre.com/wp-content/uploads/2023/09/AdobeStock_520402576-scaled.jpeg', 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/ef694d9b-8d0b-4d92-9a6c-dbdf5db61071/nike-basketball.jpg'),
  ];
  title = 'title';
}
