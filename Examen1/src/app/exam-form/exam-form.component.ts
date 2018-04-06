import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CountriesServiceService } from '../services/countries-service.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {

  public countries:Array<any> = [];

  constructor(private countriesServiceService:CountriesServiceService) { 
    this.countriesServiceService.getCountries().subscribe(res => { 
      res.forEach((value,index) => {
        this.countries.push(value);
      });
      //console.log(this.countries);
    });
    
  }

  ngOnInit() {
  }

}
