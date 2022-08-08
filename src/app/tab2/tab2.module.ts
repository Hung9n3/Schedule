import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { EventComponentModule } from '../event/event.module';
import { NgCalendarModule } from 'ionic2-calendar';
import { InputDateModalComponent } from '../pages/input-date-modal/input-date-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    EventComponentModule,
    NgCalendarModule, 
  ],
  declarations: [Tab2Page,InputDateModalComponent
  ]
})
export class Tab2PageModule {}
