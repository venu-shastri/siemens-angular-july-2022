//import decorator NgModule from @angular/core
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ConsoleLoggerService } from "src/app/services/consoleLogger.service";
import { CreditCardEmiCalculatorModule } from "src/creditCardEmiCalculator/creditCardEmiCalculator.module";

import { RootComponent } from "./components/root.component";

//Define Metadata using Typescript decorators
@NgModule({
    declarations:[RootComponent],
    imports:[BrowserModule,CreditCardEmiCalculatorModule],
    bootstrap:[RootComponent],
    providers:[ConsoleLoggerService]
})
export class RootModule{

}