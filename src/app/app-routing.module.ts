import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { ShowAllFlightsComponent } from './show-all-flights/show-all-flights.component';
import { ShowBookedFlightComponent } from './show-booked-flight/show-booked-flight.component';
import { AddClassComponent } from './add-class/add-class.component';



const routes: Routes = [

  {path:'searchFlight',component:SearchFlightComponent},
  {path:'showAllFlight',component:ShowAllFlightsComponent},
  {path:'book',component:BookFlightComponent},
  {path:'showBooked',component:ShowBookedFlightComponent},
  {path:'addFlight',component:AddFlightComponent},
  {path:'addRoute',component:AddRouteComponent},
  {path:'addClass',component:AddClassComponent}
 
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
