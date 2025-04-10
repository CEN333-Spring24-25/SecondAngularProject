import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Patient } from './data/patient';
import { PersistenceService } from './services/persistence.service';
import { from } from 'rxjs';

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
  resetState(){
    this.patient = new Patient("","",0,0,"",0,0);
  }
  registerVitals(form: any, type:string){
    let patient: Patient = new Patient(
                      this.patient.id,
                      this.patient.name,
                      this.patient.height,
                      this.patient.weight,
                      this.patient.bloodpressure,
                      this.patient.temp,
                      this.patient.oxygenlevel
    );
    this.persistence.add(patient, type);
    this.resetState();
    form.resetForm();  
  }
  deletePatient(id:string, type: string){
    this.persistence.remove(id,type);
  }
  get localListOfPatients(){
    return this.persistence.getLocalList();
  }
  get remoteListOfPatients(){
    return this.persistence.getRemoteList();
  }
}
