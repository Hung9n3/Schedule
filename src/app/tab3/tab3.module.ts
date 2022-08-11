import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import * as Hammer from 'hammerjs'

export class CustomHammerConfig extends HammerGestureConfig{
  overrides: { 
    'pan': {
      direction: Hammer.DIRECTION_ALL
    }
    'swipe': {
      direction: Hammer.DIRECTION_ALL
    }
  };
}
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    NgCalendarModule,    
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    HammerModule
  ],
  declarations: [Tab3Page],
  providers: [  {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig},
  ]
})
export class Tab3PageModule {}
