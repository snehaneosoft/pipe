import { Component } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment21_4Demo';
  todayDate:Date = new Date();
  orderVal:string = 'trainTicketFare';
  caseInsensitive:boolean = false;
  reverse:boolean = false

  TrainArray = [new Train(3000,1,"Express","Banaras to Mumbai",this.todayDate)
  ]

  TrainArray1 = [
    new Train(3000,1,"Express","Banaras to Mumbai",this.todayDate),
    new Train(7000,1,"Express","Banaras to Mumbai",this.todayDate),
    new Train(9000,1,"Express","Banaras to Mumbai",this.todayDate),
    new Train(10000,1,"Express","Banaras to Mumbai",this.todayDate)
]

  colName:string = 'trainTicketFare'
  sortData(value:string){
    if(this.orderVal == value){
      this.reverse = !this.reverse
    }
  }
}



class Train{
  trainTicketFare:number;
  trainId:number;
  trainType:string;
  trainRoute:string; 
 
  constructDate:Date; 

  constructor(trainTicketFare:number,trainId:number,trainType:string,trainRoute:string,constructDate:Date){
    this.trainTicketFare=trainTicketFare;
    this.trainId = trainId;
    this.trainType = trainType;
    this.trainRoute = trainRoute;
    
    this.constructDate = constructDate
  }
}
