import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) {
  }

  postUrl = "http://192.168.1.166:8090/V1/api/add_user";

  peticionPost(data: any) : Observable<any> {
    return this.http.post(this.postUrl,data);
  }

  /*getPoblacionMexicoPorAño(año : string):Observable<any>{
    let url : string = "http://api.population.io:80/1.0/population/" + año + "/Mexico/21";
    //console.log(url);
    return this.http.get(url).map(res => res[0]);
  }*/

}
