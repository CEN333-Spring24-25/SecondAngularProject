import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Patient } from './data/patient';
import { PersistenceService } from './services/persistence.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  patient: Patient;

  constructor(public persistence: PersistenceService){
    this.patient = new Patient("","",0,0,"",0,0);
  }
  registerVitals(){
    this.persistence.add(this.patient);
  }
  deletePatient(id:string){
    this.persistence.remove(id);
  }
  get listOfPatients(){
    return this.persistence.getLocalList();
  }
}
