import { Component,EventEmitter, Output } from "@angular/core";
import { CalculationSummaryModel } from "src/creditCardEmiCalculator/models/calculationSummary.model";

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
         let emiCost=this.amount - 1000;
         let totalInterest=this.amount-500;
         let totalAmountPayable=this.amount+ 5000;
         let resultModel=new CalculationSummaryModel(emiCost,totalInterest,totalAmountPayable);
         this.onResultComputed.emit(resultModel); //publish 
     }
     reset(){
        this.amount=0;
        this.tenure=0;
        this.interestRate=0;
         
     }

}