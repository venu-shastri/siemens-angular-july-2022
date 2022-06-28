import { NgModule } from "@angular/core";
import { WidgetsModule } from "src/app/widgets/widgets.module";
import { EmiBreakupComponent } from "./components/emiBreakup/emiBreakup.component";
import { EmiCalculatorComponent } from "./components/emiCalculator/emiCalculator.component";
import {  EmiCalculatorContainerComponent } from "./components/emiCalculatorContainer/emiCalculatorContainer.component";
import { EmiSummaryComponent } from "./components/emiSummary/emiSummary.component";

@NgModule({
    declarations:[EmiCalculatorContainerComponent,EmiCalculatorComponent,EmiBreakupComponent,EmiSummaryComponent],
    exports:[EmiCalculatorContainerComponent],
    imports:[WidgetsModule]
})
export class CreditCardEmiCalculatorModule{

}