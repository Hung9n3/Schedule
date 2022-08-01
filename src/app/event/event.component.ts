import { Component, Input, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { Event } from '../Model/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  @Input('number') number : number;
  events: Event[] = [ 
  new Event(false, new Date("2022-8-11"), new Date(), "Title" ,1),
  new Event(false, new Date("2022-8-11"), new Date(), "Title" ,2),
  new Event(false, new Date("2022-8-11"), new Date(), "Title" ,3),
  new Event(false, new Date("2022-8-11"), new Date(), "Title" ,4),
  new Event(false, new Date("2022-8-11"), new Date(), "Title", 5)
];
  dateValue = new Date(Date.now()).toISOString()
  constructor() { }

  ngOnInit() {}

  getEvent(){

  }

}
