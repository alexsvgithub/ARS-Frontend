import { Component, OnInit } from '@angular/core';
import { ARSServiceService } from '../ars-service.service';
import { AppComponent } from '../app.component';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-show-all-flights',
  templateUrl: './show-all-flights.component.html',
  styleUrls: ['./show-all-flights.component.css']
})
export class ShowAllFlightsComponent implements OnInit {

// data:Json = {};
 data = [];
  index:number = 1;
  constructor(public myapp: AppComponent) { 
    this.data=this.myapp.getData();
  }
  
  ngOnInit(): void {
  }
//   getData() {
//     //access service function
//     // this.data=this.myapp.getData();
// }
  

}
