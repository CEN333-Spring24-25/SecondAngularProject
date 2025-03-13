import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string; 
  height: number;
  weight: number;
  bloodpressure: string; 
  temp: number; 
  oxygenlevel: number;

  constructor(){
    this.name = "";
    this.height = 0; 
    this.weight = 0; 
    this.bloodpressure = "";
    this.temp = 0; 
    this.oxygenlevel = 0; 
  }

  registerVitals(){

  }
}
