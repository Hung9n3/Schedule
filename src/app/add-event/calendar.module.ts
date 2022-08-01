import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AddEventComponent } from './add-event.component';
import { EventComponentModule } from '../event/event.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, EventComponentModule],
  declarations: [AddEventComponent],
  exports: [AddEventComponent]
})
export class AddEventComponentModule {}
