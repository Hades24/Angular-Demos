import { Directive,ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomAttributeDirective]'
})
export class CustomAttributeDirectiveDirective {

  constructor(private _temp:ElementRef, private view:Renderer2) { }

  @HostListener('click')
  abc(){
    this._temp.nativeElement.innerHTML="You just hovered";
    this.view.setStyle(this._temp.nativeElement,'color','teal');
  }
}
