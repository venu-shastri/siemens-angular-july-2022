import { Directive, ElementRef, Renderer2,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { 
    console.log(element);
    //renderer.setStyle(element.nativeElement,"color","red");
  }
  @HostBinding('style.border')
  border!:string;
  @HostListener('mouseover') onHover() {
    this.renderer.setStyle(this.element.nativeElement,"color","yellow");
    this.border="5px solid black";
  }
  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.element.nativeElement,"color","red");
  }
  
  

}
