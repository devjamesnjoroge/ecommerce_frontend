import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnters(){
    this.elem.nativeElement.style.color = "green";
  }
  @HostListener('mouseleave') onMouseLeaves(){
    this.elem.nativeElement.style.color = "inherit";
  }

}
