import { Component,EventEmitter, Inject, Output } from "@angular/core";
import { CalculationSummaryModel } from "src/creditCardEmiCalculator/models/calculationSummary.model";
import { EmiCalculatorService } from "src/creditCardEmiCalculator/services/emiCalculator.service";

@Component({
    selector:'emi-calculator',
    templateUrl:'./emiCalculator.component.html'
})
export class EmiCalculatorComponent{

     amount:number=0;
     tenure:number=0;
     interestRate:number=0;
     @Output()
     onResultComputed=new EventEmitter<CalculationSummaryModel>();
     //Dependency
     serviceRef!:EmiCalculatorService;

     //Constructor Injection
     constructor(@Inject("EmiCalculatorService") service:EmiCalculatorService){
         this.serviceRef=service;
     }

     setAmount(value:string){
         this.amount=parseInt (value);
     }
     setTenure(value:string){
         this.tenure=parseInt(value);
     }
     setRateOfInterest(value:string){
         this.interestRate=parseInt(value);
     }
     calculateEmi(){
         
         let resultModel=this.serviceRef.calculateEmi(this.amount,this.tenure,this.interestRate);
         console.log("calculateEmi called");
         this.onResultComputed.emit(resultModel); //publish 
     }
     reset(){
        console.log("reset() called");
        this.amount=0;
        this.tenure=0;
        this.interestRate=0;
        this.onResultComputed.emit(new CalculationSummaryModel(0,0,0));
         
     }

}