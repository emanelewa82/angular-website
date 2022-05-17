import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonStyle]'
})
export class ButtonStyleDirective {

  constructor(private el: ElementRef){
    this.el.nativeElement.style.color = "white";
    this.el.nativeElement.style.textTransform = "capitalize";
    this.el.nativeElement.style.fontSize = "1.3rem";
    this.el.nativeElement.style.fontWeight = "bold";
    this.el.nativeElement.style.padding ="10px 20px";
    this.el.nativeElement.style.border = "1px solid white";
  }

}

