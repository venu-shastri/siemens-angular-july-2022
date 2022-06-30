import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { CreditCardEmiCalculatorModule } from './creditCardEmiCalculator/creditCardEmiCalculator.module';
import { UtilityModule } from './utility/utility.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountsModule,
    CreditCardEmiCalculatorModule,
    UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
