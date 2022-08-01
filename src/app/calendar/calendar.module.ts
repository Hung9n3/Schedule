import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CalendarComponent } from './calendar.component';
import { EventComponentModule } from '../event/event.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, EventComponentModule],
  declarations: [CalendarComponent],
  exports: [CalendarComponent]
})
export class CalendarComponentModule {}
