import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Patient } from './data/patient';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string; 
  height: string;
  weight: string;
  bloodpressure: string; 
  temp: string; 
  oxygenlevel: string;
  listOfPatients: Patient[];

  constructor(){
    this.name = "";
    this.height = ""; 
    this.weight = ""; 
    this.bloodpressure = "";
    this.temp = ""; 
    this.oxygenlevel = ""; 
    this.listOfPatients = [];
  }

  registerVitals(){
    let myPatient = new Patient(this.name, +this.height, +this.weight, this.bloodpressure, +this.temp, +this.oxygenlevel);
    this.listOfPatients.push(myPatient);
  }
  deletePatient(){
    
  }
}
