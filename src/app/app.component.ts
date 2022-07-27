import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ARS-Frntend';
  private data:any = []
  constructor(private http:HttpClient){

  }
  getData(){
    const url ='https://localhost:44342/api/flight/show'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
      
    })
    return this.data;
  }
}
