import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PoblacionMexicoService } from '../services/poblacion-mexico.service';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent {

  public pieChartLabels:string[] = ['Mujeres', 'Hombres'];
  public pieChartData:number[] = [0, 0];
  public pieChartType:string = 'pie';
  public lineChartLabels:Array<any> = [];
  public comparacion:string;

  constructor(private poblacionService:PoblacionMexicoService) {
    for(let i = 2012; i <= 2018; i++) {
      this.lineChartLabels.push(i);
    }

    let pieChartData:number[] = [0,0];
    this.lineChartLabels.forEach((value,index) => {
      this.poblacionService.getPoblacionMexicoPorAño(value).subscribe(res => {
        pieChartData[0] += res['females'];
        pieChartData[1] += res['males'];
        this.pieChartData =  pieChartData;
        //console.log(this.pieChartData);
      });
    });

    //this.comparacion = (this.pieChartData[0] < this.pieChartData[1]) ? 'Ganan los Hombres' : 'Ganan las Mujeres';

  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
