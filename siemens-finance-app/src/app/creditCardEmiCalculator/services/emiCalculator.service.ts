import { Injectable } from "@angular/core";
import { ConsoleLoggerService } from "../../services/consoleLogger.service";
import { CalculationSummaryModel } from "../models/calculationSummary.model";
import { BaseCalculatorService } from "./baseCalculator.service";


@Injectable()
export class EmiCalculatorService extends BaseCalculatorService{
    constructor(private logger:ConsoleLoggerService){
        super();
       this.logger.write("EmiCalculatorService constructor  called");
    }

    calculateEmi(amount:number,tenure:number,rateOfInterest:number):CalculationSummaryModel{

        this.logger.write("EmiCalculatorService calculateEmi  called");
        return new CalculationSummaryModel(amount-1000,amount-5000,amount+10000);
    }
}