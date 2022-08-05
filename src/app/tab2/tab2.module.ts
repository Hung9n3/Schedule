import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { EventComponentModule } from '../event/event.module';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    EventComponentModule,
    NgCalendarModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
