import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  
  get peopleList(): Person[]{
    return this.filterService.getPerson();
  }

}
