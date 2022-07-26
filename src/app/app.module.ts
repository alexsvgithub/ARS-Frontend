import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { ShowBookedFlightComponent } from './show-booked-flight/show-booked-flight.component';
import { ShowAllFlightsComponent } from './show-all-flights/show-all-flights.component';
import { AddClassComponent } from './add-class/add-class.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ARSServiceService } from './ars-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainContentComponent,
    FootBarComponent,
    SearchFlightComponent,
    BookFlightComponent,
    AddFlightComponent,
    AddRouteComponent,
    ShowBookedFlightComponent,
    ShowAllFlightsComponent,
    AddClassComponent
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ARSServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// https://localhost:44342/api/flight/show