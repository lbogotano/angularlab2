import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private personArray: Person[] = [
    new Person("Luis", "Gonzalez"),
    new Person("Carlos", "Gomez")
  ]
  constructor() { }

  getPerson(): Person[]{
    return this.personArray;
  }

  

  async delay(ms: number){
    await new Promise(resolve =>
      setTimeout(()=> 
       resolve(), ms));
  }
}