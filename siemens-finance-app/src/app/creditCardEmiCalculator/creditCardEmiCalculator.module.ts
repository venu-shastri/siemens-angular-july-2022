import { NgModule } from "@angular/core";
import { WidgetsModule } from "src/app/widgets/widgets.module";
import { UtilityModule } from "../utility/utility.module";
import { EmiBreakupComponent } from "./components/emiBreakup/emiBreakup.component";
import { EmiCalculatorComponent } from "./components/emiCalculator/emiCalculator.component";
import {  EmiCalculatorContainerComponent } from "./components/emiCalculatorContainer/emiCalculatorContainer.component";
import { EmiSummaryComponent } from "./components/emiSummary/emiSummary.component";
import { EmiCalculatorService } from "./services/emiCalculator.service";

@NgModule({
    declarations:[EmiCalculatorContainerComponent,EmiCalculatorComponent,EmiBreakupComponent,EmiSummaryComponent],
    exports:[EmiCalculatorContainerComponent],
    imports:[WidgetsModule,UtilityModule],

    providers:[
        {provide:"EmiCalculatorService",useClass:EmiCalculatorService}
    ]
})
export class CreditCardEmiCalculatorModule{

}