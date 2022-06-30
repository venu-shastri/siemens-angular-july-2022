import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';


@NgModule({
  declarations: [
    CardsContainerComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule
  ]
})
export class CardsModule { }
