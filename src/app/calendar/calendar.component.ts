import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';
import {Event, SortedEvent} from '../Model/Event'
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  isstartDate: boolean = false;
  isendDate:boolean = false;
  formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T07:00:00.000Z'),'yyyy-MM-dd');
  constructor() { }
  value = format(new Date(), 'yyyy-MM-dd') + 'T07:00:00.000Z';
  events: Event[] = [ 
    new Event(false, new Date("2022-8-11"), new Date(), "Title" ,1),
    new Event(false, new Date("2022-8-13"), new Date(), "Title" ,2),
    new Event(false, new Date("2022-8-8"), new Date(), "Title" ,3),
    new Event(false, new Date("2022-8-4"), new Date(), "Title" ,4),
    new Event(false, new Date("2022-8-7"), new Date(), "Title", 5)
  ];
  showEvents: SortedEvent[];
  ngOnInit() {
    console.log(this.formattedString);
    console.log(new Date(this.formattedString))
    console.log(this.events)
    
  }
  getToday(value:string):Date{
    return new Date(this.formattedString)
  }
  // setToday(){
  //   this.formattedString = format(parseISO(format(this.current, 'yyyy-MM-dd') + 'T07:00:00.000Z'), 'HH:mm, MM d, yyyy')
  // }
  ValueChange(value){
    this.showEvents = [];
    this.value = value;
    this.events.forEach(element => {
      if(this.dayCompare(element, value)){
        this.showEvents.push(new SortedEvent(this.checkifAllday(element, value)
        , this.isEndDate(element,value), this.isStartDate(element,value)
        , this.getHourMinute(element.endTime), this.getHourMinute(element.startTime)
        , element.endTime,element.startTime, element.title, element.id))
      }
    });
    console.log(this.showEvents)
    // console.log(new Date(format(new Date(value), 'yyyy-MM-dd')))
    }
  dayCompare(event:Event, selected:string): boolean{
    var start = new Date(format(event.startTime, 'yyyy-MM-dd'))
    var end = new Date(format(event.endTime, 'yyyy-MM-dd'))
    var selecteddate = new Date(format(new Date(selected), 'yyyy-MM-dd'))
    return (start <= selecteddate && end >= selecteddate)
  }
  checkifAllday(event:Event, selected:string):boolean{
    var start = new Date(format(event.startTime, 'yyyy-MM-dd'))
    console.log("Start:"+ start)
    var end = new Date(format(event.endTime, 'yyyy-MM-dd'))
    console.log("End:"+ end)
    var selecteddate = new Date(format(new Date(selected), 'yyyy-MM-dd'))
    console.log("Today", selecteddate)
    return !(start.getTime() == selecteddate.getTime() || end.getTime() == selecteddate.getTime())
  }
  getHourMinute(date:Date):string{
    return date.getHours() + ':' + date.getMinutes();
  }
  isEndDate(element:Event, selected:string):boolean{
    var end = new Date(format(element.endTime, 'yyyy-MM-dd'))
    var selecteddate = new Date(format(new Date(selected), 'yyyy-MM-dd'))
    return end.getTime() == selecteddate.getTime()
  }
  isStartDate(element:Event, selected:string): boolean{
    var start = new Date(format(element.startTime, 'yyyy-MM-dd'))
    var selecteddate = new Date(format(new Date(selected), 'yyyy-MM-dd'))
    return start.getTime() == selecteddate.getTime()
  }
}
