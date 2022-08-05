import { Component, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  eventSource = [];
  calendar = {
    mode: 'week',
    currentDate: new Date(),
  };
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  viewTitle: string;

  constructor(
  ) {}
  onDayHeaderSelected = (ev: { selectedTime: Date, events: any[], disabled: boolean }) => {
    console.log(ev.events)
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
};
  next() {
    this.myCal.slideNext();
  }
 
  back() {
    this.myCal.slidePrev();
  }
  changeMode(mode) {
    this.eventSource = this.eventSource
    this.calendar.mode = mode;
}
  changeTitle(title) {
    this.viewTitle = title;
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
 
}
