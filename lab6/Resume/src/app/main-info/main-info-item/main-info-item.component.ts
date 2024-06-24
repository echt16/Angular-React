import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-info-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-info-item.component.html',
  styleUrl: './main-info-item.component.css'
})
export class MainInfoItemComponent {
  @Input() name: string = "";
  @Input() value: any = "";
  type: string = typeof (this.value);
}
