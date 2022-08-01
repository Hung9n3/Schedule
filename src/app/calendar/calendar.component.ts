import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  formattedString = '';
  constructor() { }
  current = new Date();
  value = format(new Date(), 'yyyy-MM-dd') + 'T07:00:00.000Z';
  ngOnInit() {
    console.log(this.formattedString);
    console.log(this.value)
  }
  setToday(){
    this.formattedString = format(parseISO(format(this.current, 'yyyy-MM-dd') + 'T07:00:00.000Z'), 'HH:mm, MM d, yyyy')
  }
  ValueChange(value){
    this.value = value;
    console.log(value);
  }

}
