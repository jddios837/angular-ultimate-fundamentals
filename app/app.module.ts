import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

@NgModule({
  imports: [
    // angular modules
    BrowserModule,
    // own modules
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
