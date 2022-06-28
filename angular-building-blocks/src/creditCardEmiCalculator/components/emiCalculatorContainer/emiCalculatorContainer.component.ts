import { Component } from "@angular/core";
import { CalculationSummaryModel } from "src/creditCardEmiCalculator/models/calculationSummary.model";

@Component({
    templateUrl:'./emiCalculatorContainer.component.html',
    selector:'emi-calculator-container'
})
export class EmiCalculatorContainerComponent{

    resultData:CalculationSummaryModel=new CalculationSummaryModel(0,0,0);
    onResultComputed_Handler(data:CalculationSummaryModel){
    this.resultData=data;
    }

}