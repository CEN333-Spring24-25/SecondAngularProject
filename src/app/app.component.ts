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
  phone: string;
  name: string; 
  height: string;
  weight: string;
  bloodpressure: string; 
  temp: string; 
  oxygenlevel: string;
  listOfPatients: Patient[];

  constructor(){
    this.phone = ""; 
    this.name = "";
    this.height = ""; 
    this.weight = ""; 
    this.bloodpressure = "";
    this.temp = ""; 
    this.oxygenlevel = ""; 
    this.listOfPatients = [];
  }

  registerVitals(){
    let myPatient = new Patient(this.phone, this.name, +this.height, +this.weight, this.bloodpressure, +this.temp, +this.oxygenlevel);
    this.listOfPatients.push(myPatient);
  }
  deletePatient(phone: string){

    this.listOfPatients.splice(this.listOfPatients.findIndex((patient) => { return patient.phone == phone}), 1);
    
    /*
    let indexToDelete = -1; 
    for(let i = 0 ; i < this.listOfPatients.length; i++)
    {
      if(this.listOfPatients[i].phone == phone)
      {
        indexToDelete = i;
      }
    }
    if(indexToDelete != -1)
    {
      this.listOfPatients.splice(indexToDelete,1);
    }
      */
  }
    
}
