import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { TotalService } from '../services/total.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registroForm : FormGroup;
  public datos:Array<any> = [];
  public existe:boolean = false;

  constructor(private form : FormBuilder, private totalService:TotalService) {
  }

  ngOnInit() {
    this.registroForm = this.form.group({
      'nombres' : [null, Validators.compose([Validators.required, Validators.pattern("[A-Za-zÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1_ ]+")])],
      'edad' : [null, Validators.compose([Validators.required, Validators.min(18), Validators.max(70)])],
      'genero' : ['Masculino', Validators.required]
    })
  }

  Enviar(Data) {
    let existe:boolean = false;
    if(this.datos.length != 0) {
      this.datos.forEach(element => {
        if(Data.nombres == element.nombres) {
          this.existe = true;
        } else {
          this.existe = false;
        }      
      });
    }

    if(!this.existe) {
      this.datos.push(Data);

      //this.chartComponent.pieChartData[0] = 100;


      this.totalService.setTotal(this.datos.length);

      console.log(this.datos.length);

      console.log(this.totalService.getTotal());
    }


    //this.apiService.peticionPost(Data).subscribe( res => console.log(res));
  }

}
