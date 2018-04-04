import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicioGasolinaService {

  constructor(private http:HttpClient) { 
  }

  PeticionGet():Observable<any> {
    let Url:string = 'https://api.datos.gob.mx/v1/precio.gasolina.publico';
    return this.http.get(Url).map(res => res['results'].map((res) => new Post(res['calle'], res['codigopostal'], res['razonsocial'])));
  }

}
