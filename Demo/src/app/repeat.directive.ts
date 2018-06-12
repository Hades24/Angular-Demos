import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {
  
  constructor(private _temp:TemplateRef<any>, private _view:ViewContainerRef) { }
  @Input()
  set appRepeat(data){
    
    for (let i=0;i<data;i++){
      //document.getElementById("re").innerHTML="";
      this._view.createEmbeddedView(this._temp);
    }
  }
}
