import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TostringPipe } from './pipes/tostring.pipe';
import { InrPipe } from './pipes/inr.pipe';



@NgModule({
  declarations: [
    TostringPipe,
    InrPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[TostringPipe,InrPipe]
})
export class UtilityModule { }
