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
  end:Date;
  formatstart:string = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T07:00:00.000Z'),'HH:mm, MMM-d,yyyy');
  formatend: string = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T07:00:00.000Z'),'HH:mm, MMM-d,yyyy');
  constructor(
  ) {}
  @ViewChild(IonModal) modal: IonModal;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('confirm');
  }

  getFromPicker(value:string){

  }
  openStart(){
    !this.showPickerStart
  }
  onChangestart(){}
  onChangeend(){}
  openEnd(){
    !this.showPickerEnd
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
