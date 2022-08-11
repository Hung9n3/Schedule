import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Hammer from 'hammerjs'

export class CustomHammerConfig extends HammerGestureConfig{
  overrides: { 
    'pan': {
      direction: Hammer.DIRECTION_VERTICAL
    }
    // 'swipe': {
    //   direction: Hammer.DIRECTION_ALL
    // }
  };
}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HammerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  { provide:  LOCALE_ID, useValue:'vi-Vi'},
  {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig},
  DatePipe
],
  bootstrap: [AppComponent],
})
export class AppModule {}
