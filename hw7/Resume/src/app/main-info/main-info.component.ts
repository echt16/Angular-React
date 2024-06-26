import { Component, Input } from '@angular/core';
import { Person } from '../person';
import { CommonModule } from '@angular/common';
import { MainInfoItemComponent } from './main-info-item/main-info-item.component';

@Component({
  selector: 'app-main-info',
  standalone: true,
  imports: [CommonModule, MainInfoItemComponent],
  templateUrl: './main-info.component.html',
  styleUrl: './main-info.component.css'
})
export class MainInfoComponent {
  @Input() person!: Person;
}
