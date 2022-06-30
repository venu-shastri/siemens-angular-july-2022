import { Component, Input } from "@angular/core";
import { CalculationSummaryModel } from "../../models/calculationSummary.model";

@Component({
    selector:'emi-summary',
    templateUrl:'./emiSummary.component.html'
})
export class EmiSummaryComponent{
    
    @Input()
    result!:CalculationSummaryModel;
}