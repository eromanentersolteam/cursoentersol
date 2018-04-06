import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CountriesServiceService {

  constructor(private http:HttpClient){ 
  }

  getCountries():Observable<any>{
    let url : string = "http://api.population.io:80/1.0/countries";
    //console.log(url);
    return this.http.get(url).map(res => res['countries']);
    //console.log(url);
  }

}
