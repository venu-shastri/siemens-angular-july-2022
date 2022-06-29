import { Component, Inject } from "@angular/core";
import { CalculationParameterModel } from "src/creditCardEmiCalculator/models/calculationParameter.model";
import { CalculationSummaryModel } from "src/creditCardEmiCalculator/models/calculationSummary.model";
import { EmiCalculatorService } from "src/creditCardEmiCalculator/services/emiCalculator.service";

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