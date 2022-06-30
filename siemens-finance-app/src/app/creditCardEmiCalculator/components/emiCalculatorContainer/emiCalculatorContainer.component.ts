import { Component, Inject } from "@angular/core";
import { CalculationParameterModel } from "../../models/calculationParameter.model";
import { CalculationSummaryModel } from "../../models/calculationSummary.model";
import { EmiCalculatorService } from "../../services/emiCalculator.service";

@Component({
    templateUrl:'./emiCalculatorContainer.component.html',
    selector:'emi-calculator-container'
})
export class EmiCalculatorContainerComponent{


    resultData:CalculationSummaryModel=new CalculationSummaryModel(0,0,0);

    constructor(@Inject("EmiCalculatorService") private serviceRef:EmiCalculatorService){

    }
    onParameterComputed_Handler(data:CalculationParameterModel){
       this.resultData= this.serviceRef.calculateEmi(data.amount,data.amount,data.interestRate);
    }

}