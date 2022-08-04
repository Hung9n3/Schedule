import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  { provide:  LOCALE_ID, useValue:'vi-Vi'},
  DatePipe
],
  bootstrap: [AppComponent],
})
export class AppModule {}
