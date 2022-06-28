import { Component, Input } from "@angular/core";
import { CalculationSummaryModel } from "src/creditCardEmiCalculator/models/calculationSummary.model";

@Component({
    selector:'emi-summary',
    templateUrl:'./emiSummary.component.html'
})
export class EmiSummaryComponent{
    
    @Input()
    result!:CalculationSummaryModel;
}