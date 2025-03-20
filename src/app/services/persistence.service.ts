import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  locallist: any[] | null;
  remotelist: any[];

  constructor() { 
    this.remotelist = [];
    let myList : string | null =  localStorage.getItem("local")
    this.locallist = myList != null ?  JSON.parse(myList) : [];
   
  }
  add(item: any){
    this.locallist?.push(item);
    localStorage.setItem("local",JSON.stringify(this.locallist));
  }
  remove(id: string){
    this.locallist?.splice(this.locallist.findIndex((item)=>{ return item.id == id}),1);
    localStorage.setItem("local",JSON.stringify(this.locallist));
  }
  getLocalList(){
    return this.locallist;
  }

}
