import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ARSServiceService {
// api_url:string = environment.api_url;
private data:any = []
  constructor(private http:HttpClient) { }

  getData(){
    const url ='https://localhost:44342/api/flight/show'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
}
