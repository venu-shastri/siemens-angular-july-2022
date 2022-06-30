import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit,OnDestroy {

  currentUser:string|null="";
  subscriptionRef!:Subscription;
  constructor(private cuurentRoute:ActivatedRoute) { }

  ngOnInit(): void {
//?
   this.subscriptionRef= this.cuurentRoute.paramMap.subscribe(param=>{
        this.currentUser=param.get("username");
        
    });
  }
  ngOnDestroy(): void {
    //destructor - cleanup
    this.subscriptionRef.unsubscribe();
  }

}