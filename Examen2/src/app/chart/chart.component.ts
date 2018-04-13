import { Component, OnInit } from '@angular/core';
import { TotalService } from '../services/total.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  // Pie
  public pieChartLabels:string[] = ['Total'];
  public pieChartData:number[] = [0];
  public pieChartType:string = 'pie';

  constructor(private totalservice:TotalService) { 
  }

  ngOnInit() {
    
  }

  // events
  public chartClicked(e:any):void {
    console.log(this.totalservice.getTotal());
    this.pieChartData[0] =  this.totalservice.getTotal();
  }

}
