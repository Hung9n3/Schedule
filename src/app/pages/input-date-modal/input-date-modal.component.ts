import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-input-date-modal',
  templateUrl: './input-date-modal.component.html',
  styleUrls: ['./input-date-modal.component.scss'],
})
export class InputDateModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  date: string;

  ngOnInit() {}
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.date, 'confirm');
  }
}
