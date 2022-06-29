import { Component,EventEmitter, Inject, Output } from "@angular/core";
import { ConsoleLoggerService } from "src/app/services/consoleLogger.service";
import { CalculationParameterModel } from "src/creditCardEmiCalculator/models/calculationParameter.model";
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
     onParameterComputed=new EventEmitter<CalculationParameterModel>();
     
     //Constructor Injection
     constructor(){
         
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
         
         
         
         this.onParameterComputed.emit(new CalculationParameterModel(this.amount,this.tenure,this.interestRate)); //publish 
     }
     reset(){

        this.amount=0;
        this.tenure=0;
        this.interestRate=0;
       /// this.onResultComputed.emit(new CalculationSummaryModel(0,0,0));
         
     }

}