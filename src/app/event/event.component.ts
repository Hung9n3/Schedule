import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  events: Event[] = [];
  dateValue = new Date(Date.now()).toISOString()
  constructor() { }

  ngOnInit() {}

  getEvent(){

  }

}
