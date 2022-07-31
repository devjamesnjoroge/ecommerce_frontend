import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClose]'
})
export class CloseDirective {
 
   
  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textDeco("green")
  }

  @HostListener("mouseenter") onMouseEnters(){
    this.transform("20px")
  }

  @HostListener("mouseleave") onMouseLeaves(){
    this.transform("16px")
  }


  private textDeco(action:string){
    this.elem.nativeElement.style.color = action;

  }

  private transform(action:string){
    this.elem.nativeElement.style.fontSize = action;

  }

}
