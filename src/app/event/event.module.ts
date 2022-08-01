import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EventComponent } from './Event.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [EventComponent],
  exports: [EventComponent]
})
export class EventComponentModule {}
