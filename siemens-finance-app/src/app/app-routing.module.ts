import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './accounts/components/forgot-password/forgot-password.component';
import { LoginComponent } from './accounts/components/login/login.component';
import { LogoutComponent } from './accounts/components/logout/logout.component';
import { SignupComponent } from './accounts/components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { EmiCalculatorContainerComponent } from './creditCardEmiCalculator/components/emiCalculatorContainer/emiCalculatorContainer.component';
//ui state configuration
const routes: Routes = [
  {path:"" , redirectTo:"home", pathMatch:'full'},
  {path:"home",component:HomeComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"fp",component:ForgotPasswordComponent}
  ]},
  {path:"maindashboard/:username",component:MainDashboardComponent,children:[
    {path:'emicalc', component:EmiCalculatorContainerComponent},
    {path:'cards',loadChildren:()=>import('./cards/cards.module').then((m)=>m.CardsModule)}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
