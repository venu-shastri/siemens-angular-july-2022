import { Injectable } from "@angular/core";
import { CalculationSummaryModel } from "../models/calculationSummary.model";

@Injectable()
export abstract class BaseCalculatorService{

    public abstract calculateEmi(amount:number,tenure:number,rateOfInterest:number):CalculationSummaryModel;
}