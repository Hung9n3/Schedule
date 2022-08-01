import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CalendarComponentModule } from '../calendar/calendar.module';
import { EventComponentModule } from '../event/event.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    CalendarComponentModule,
    EventComponentModule
   ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
