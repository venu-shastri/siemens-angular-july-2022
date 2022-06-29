import { CalculationSummaryModel } from "../models/calculationSummary.model";

export class EmiCalculatorService{
    constructor(){
        console.log("EmiCalculatorService constructor  called");
    }

    calculateEmi(amount:number,tenure:number,rateOfInterest:number):CalculationSummaryModel{

        console.log("EmiCalculatorService calculateEmi  called");
        return new CalculationSummaryModel(amount-1000,amount-5000,amount+10000);
    }
}