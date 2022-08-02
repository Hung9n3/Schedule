import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  eventSource = [];
  viewTitle:string;
   calendar = {
    mode: 'month',
    currentDate: new Date()
   }
   selectedDate: Date

   @ViewChild(CalendarComponent) myCal: CalendarComponent;
    
  constructor() {}
  ngOnInit(): void {
  }
  next(){
    this.myCal.slideNext();
  }
  back(){
    this.myCal.slidePrev();
  }

}
