import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Person } from './person';
import { person } from './person-item';
import { ResumeServices } from './resume.services';
import { MainInfoComponent } from './main-info/main-info.component';
import { JobPlace } from './job-place';
import { Skill } from './skill';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MainInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ResumeServices]
})
export class AppComponent {
  person: Person = person;
  constructor(private services: ResumeServices) { }
  getJobPlaces():JobPlace[]{
    return this.services.getJobPlaces();
  }

  getDescrOfSkill(item:Skill):string{
    return this.services.getDescrOfSkill(item);
  }

  getDescrOfExperience():string{
    return this.services.getDescrOfExperience();
  }

  getDescrJobPlace(item:JobPlace):string{
    return this.services.getDescrJobPlace(item);
  }

  title = 'title';
}
