import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TostringPipe } from './pipes/tostring.pipe';
import { InrPipe } from './pipes/inr.pipe';
import { HoverDirective } from './directives/hover.directive';



@NgModule({
  declarations: [
    TostringPipe,
    InrPipe,
    HoverDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[TostringPipe,InrPipe,HoverDirective]
})
export class UtilityModule { }
