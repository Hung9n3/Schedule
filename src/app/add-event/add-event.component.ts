import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {

  @Output() datePickerValue: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {}
  change(value) {
    // this.dateValue = this.formatDate(value, this.date_format);
    this.datePickerValue.emit(value);
  }
}
