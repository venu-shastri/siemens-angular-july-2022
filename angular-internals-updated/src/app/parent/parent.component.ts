import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ContentkidComponent } from '../contentkid/contentkid.component';
import { ViewkidComponent } from '../viewkid/viewkid.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges ,AfterContentInit,AfterViewInit,OnDestroy{

  @Input()
  ip:string="";


  constructor() {

    console.log("ParentComponent Constructor Called!");
    
   }

   ngOnInit(): void {
    console.log("ParentComponent ngOnInit Called!");
   }
   ngOnChanges(changes: SimpleChanges): void {
    console.log("ParentComponent ngOnChanges Called!",changes);
   }
   ngAfterContentInit(): void {
    console.log("ParentComponent ngAfterContentInit Called!")
   }
   ngAfterViewInit(): void {
    console.log("ParentComponent ngAfterViewInit Called!")
   }
   ngOnDestroy(): void {
    console.log("ParentComponent ngOnDestroy Called!")
   }
  

 // @ViewChildren
  @ViewChild(ViewkidComponent)
  viewChildRef!:ViewkidComponent

  //@ContentChildren
  @ContentChild(ContentkidComponent)
  contentChildRef!:ContentkidComponent

 

}
