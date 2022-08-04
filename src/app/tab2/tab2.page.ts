import { DatePipe, formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { format } from 'date-fns';
import { CalendarComponent } from 'ionic2-calendar';
import { CalModalPage } from '../pages/cal-modal/cal-modal.page';
import {Event, Event2, eventCard} from '../Model/Event'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  eventSource = [
    {title: 'event1',startTime: new Date("2022/8/1 10:00:00"),endTime: new Date("2022/8/1 13:00:00"),allDay: false, colorCode:"#5494E6"},
    {title: 'event2',startTime: new Date("2022/8/4 8:00:00"),endTime: new Date("2022/8/4 12:00:00"),allDay: false, colorCode:"#5494E6"},
    {title: 'event3',startTime: new Date("2022/8/6 8:00:00"),endTime: new Date("2022/8/7 12:00:00"),allDay: false, colorCode:"#5494E6"},
    {title: 'event4',startTime: new Date("2022/8/5 9:00:00"),endTime: new Date("2022/8/6 12:00:00"),allDay: false, colorCode:"#5494E6"},

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
    console.log(this.eventSource)
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
    this.calendar.mode = mode;
}

onTimeSelected = (ev: { selectedTime: Date, events: any[], disabled: boolean }) => {
  this.eventByDate = ev.events;
  console.log(this.eventByDate)
  for(var i = 0; i <= this.eventByDate.length; i++ )
  {
    let exist = false;
    for(var j = 0; j <= this.eventCards.length; j++)
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
  removeEvents() {
    this.eventSource = [];
  }
  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
   
    await modal.present();
   
    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event) {
        let event = result.data.event;
        if (event.allDay) {
          let start = event.startTime;
          event.startTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate()
            )
          );
          event.endTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate() + 1
            )
          );
        }
        this.eventSource.push(result.data.event);
        this.myCal.loadEvents();
      }
    });
  }
  markDisabled = (date: Date) => { let dateFormatted = this.datepipe.transform(date, "EEE") 
  if (dateFormatted == "Th 7" || dateFormatted == "CN") { return true } else { return false } };

  onSelectWeekmode(day:Date){
    console.log(day);
  }
  sortEvent(){
    
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
