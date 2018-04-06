import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PopulationMexico32Service {

  constructor(private http:HttpClient) { 
  }

  getPopulation():Observable<any>{
    let url : string = "http://api.population.io:80/1.0/population/2018/Mexico/32/";
    //console.log(url);
    return this.http.get(url).map(res => res[0]);
    //console.log(url);
  }

}
