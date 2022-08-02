import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { format, parseISO } from 'date-fns';
import { AddEventComponent } from '../add-event/add-event.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  message: string;
  showPickerStart:boolean = false;
  showPickerEnd:boolean = false;
  start:Date;
  startValue: string = format(new Date(), 'yyyy-MM-dd') + 'T07:00:00:000Z';
  endValue:string = format(new Date(), 'yyyy-MM-dd') + 'T07:00:00:000Z';
  end:Date;
  formatstart:string = format(parseISO(format(new Date(), 'yyyy-MM-dd')),'HH:mm, MMM-d,yyyy');
  formatend: string = format(parseISO(format(new Date(), 'yyyy-MM-dd')),'HH:mm, MMM-d,yyyy');
  constructor(
  ) {}
  @ViewChild(IonModal) modal: IonModal;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('confirm');
  }
  onChangestart(value){
    this.start = new Date(value)
    this.startValue = 
    this.formatstart = format(parseISO(value),'HH:mm, MMM-d,yyyy');
  }
  onChangeend(value){
    this.end = new Date(value)
    this.formatend = format(parseISO(value),'HH:mm, MMM-d,yyyy');
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
