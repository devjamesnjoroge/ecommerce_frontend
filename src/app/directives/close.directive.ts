import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClose]'
})
export class CloseDirective {
 
  toggleClass = document.getElementsByClassName("carts");
   
  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textDeco("open")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration = action;

  }

}
