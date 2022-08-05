import { DatePipe, formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { format } from 'date-fns';
import { CalendarComponent } from 'ionic2-calendar';
import {Event, Event2, eventCard} from '../Model/Event'
import { IWeekView, IWeekViewDateRow, IWeekViewRow } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  eventSource = [
    {title: 'event1',startTime: new Date("2022/8/1 10:00:00"),endTime: new Date("2022/8/1 13:00:00"),allDay: true, colorCode:"#5494E6"},
    {title: 'event2',startTime: new Date("2022/8/5 8:00:00"),endTime: new Date("2022/8/5 12:00:00"),allDay: true, colorCode:"#ffb84d"},
    {title: 'event3',startTime: new Date("2022/8/5 8:00:00"),endTime: new Date("2022/8/5 12:00:00"),allDay: true, colorCode:"#884dff"},
    {title: 'event4',startTime: new Date("2022/8/5 9:00:00"),endTime: new Date("2022/8/5 12:00:00"),allDay: true, colorCode:"#1a8cff"},
    {title: 'event5',startTime: new Date("2022/8/1 9:00:00"),endTime: new Date("2022/8/1 12:00:00"),allDay: true, colorCode:"#ffb84d"},
    {title: 'event6',startTime: new Date("2022/8/1 8:00:00"),endTime: new Date("2022/8/1 12:00:00"),allDay: true, colorCode:"#ff3333"},
    {title: 'event7',startTime: new Date("2022/8/1 8:00:00"),endTime: new Date("2022/8/1 12:00:00"),allDay: true, colorCode:"#79ff4d"},
    {title: 'event8',startTime: new Date("2022/8/1 8:00:00"),endTime: new Date("2022/8/1 12:00:00"),allDay: true, colorCode:"#4ddbff"},
  ];
  eventCards :eventCard[] = [];
  eventByDate : Event2[] = [];
  viewTitle: string;
  calendar = {
    mode: "month",
    currentDate: new Date(),
    formatDate: {
      formatWeekViewDayHeader: function(date:Date) {
        return 'd';
    },
    }
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private modalCtrl: ModalController,
    public datepipe: DatePipe
  ) {}
  ngOnInit(): void {
    console.log(this.eventSource);
  }
  next() {
    this.myCal.slideNext();
  }
  back() {
    this.myCal.slidePrev();
  }
  changeTitle(title) {
    this.viewTitle = title;
  }
  changeMode(mode) {
    this.eventSource = this.eventSource
    this.calendar.mode = mode;
}

onDayHeaderSelected = (ev: { selectedTime: Date, events: any[], disabled: boolean }) => {
  console.log(ev.events)
  console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
};

onTimeSelected = (ev: { selectedTime: Date, events: any[], disabled: boolean }) => {
  this.eventByDate = []
  this.eventCards = []
  this.eventByDate = ev.events;
  console.log(this.eventByDate)
  for(var i = 0; i < this.eventByDate.length; i++ )
  {
    let exist = false;
    for(var j = 0; j < this.eventCards.length; j++)
    {
      if(this.eventByDate[i].startTime.getHours() == this.eventCards[j].key){
        exist = true;
        this.eventCards[j].list.push(this.eventByDate[i])
        break;
      }
    }
    if(exist == false) 
    this.eventCards.push(new eventCard(this.eventByDate[i].startTime.getHours(), [this.eventByDate[i]]));
  }
  console.log(this.eventCards)
}
  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )
        );
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay
          )
        );
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true,
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute
        );
        endTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute
        );
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      }
    }
    this.eventSource = events;
  }
  loadEvent(){
    this.eventSource.push()
    this.myCal.loadEvents();
  }
  removeEvents() {
    this.eventSource = [];
  }
  markDisabled = (date: Date) => { let dateFormatted = this.datepipe.transform(date, "EEE") 
  if (dateFormatted == "Th 7" || dateFormatted == "CN") { return true } else { return false } };

  onTimeSelectWeekmode(day:Date){
    this.eventByDate = [];
    this.eventCards = [];
    this.eventSource.forEach(e => {
      if(this.dayCompare(e, day)){
        this.eventByDate.push(
          new Event2(true, e.endTime, e.startTime, e.title, e.colorCode))
      }
    });
    for(var i = 0; i < this.eventByDate.length; i++ )
  {
    let exist = false;
    for(var j = 0; j < this.eventCards.length; j++)
    {
      if(this.eventByDate[i].startTime.getHours() == this.eventCards[j].key){
        exist = true;
        this.eventCards[j].list.push(this.eventByDate[i])
        break;
      }
    }
    if(exist == false) 
    this.eventCards.push(new eventCard(this.eventByDate[i].startTime.getHours(), [this.eventByDate[i]]));
  }
    console.log(this.eventCards);
  }
  sortEvent(){
    
  }
  dayCompare(event:Event2, selected:Date): boolean{
    var start = new Date(format(event.startTime, 'yyyy-MM-dd'))
    var end = new Date(format(event.endTime, 'yyyy-MM-dd'))
    var selecteddate = new Date(format(selected, 'yyyy-MM-dd'))
    return (start <= selecteddate && end >= selecteddate)
  }
  checkifAllday(event:Event2, selected:Date):boolean{
    var start = new Date(format(event.startTime, 'yyyy-MM-dd'))
    // console.log("Start:"+ start)
    var end = new Date(format(event.endTime, 'yyyy-MM-dd'))
    // console.log("End:"+ end)
    var selecteddate = new Date(format(new Date(selected), 'yyyy-MM-dd'))
    // console.log("Today", selecteddate)
    return !(start.getTime() == selecteddate.getTime() || end.getTime() == selecteddate.getTime())
  }
  getHightlightClass(date: IWeekViewDateRow) :string{
    let className = '';
    if (date.selected) {
      if (className) {
          className += ' ';
      }
      className += 'weekView-selected';
  }
  return className
  }

}
