import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from './chart.interface';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  selectedChart !: Chart;
  chart! : Chart[];

  constructor(private http:HttpClient) { }

  Getchartinfo(){
    return this.http.get("http://localhost:3000/sales");
  }

  //post 
  postChart(chart : Chart) {     //'/addEmp'
    // return this.http.post(this.baseURL, emp);
    return this.http.post("http://localhost:4000/data", chart );
}


  
}
