import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PopulationMexico32Service } from '../services/population-mexico-32.service';

@Component({
  selector: 'app-char1',
  templateUrl: './char1.component.html',
  styleUrls: ['./char1.component.css']
})
export class Char1Component {

  public pieChartLabels:string[] = ['Males', 'Females'];
  public pieChartData:number[] = [0,0];
  public pieChartType:string = 'pie';

  constructor(private poulationMexico:PopulationMexico32Service) { 
    let pieChartData:number[] = [0,0];
    this.poulationMexico.getPopulation().subscribe(res => { 
      //res.forEach((value,index) => {
        pieChartData[0] = res['males'];
        pieChartData[1] = res['females'];
        //this.pieChartData =  pieChartData;
        this.pieChartData = pieChartData;//res['males'];
        //this.pieChartData[1] = 200;//res['females'];
      //});
      console.log(res['males']);
    });
    
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
