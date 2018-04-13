import { Injectable } from '@angular/core';

@Injectable()
export class TotalService {
  public total:number = 0;

  constructor() { }

  setTotal(total) {
    //this.total = this.total+total;
    this.total = this.total+total;
    //return this.total;
  }

  getTotal() {
    return this.total;
  }

}
