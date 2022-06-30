import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';

const routes: Routes = [
  {path:"",component:CardsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
