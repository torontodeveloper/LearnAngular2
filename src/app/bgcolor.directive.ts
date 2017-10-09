import { Directive, HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})

export class BgcolorDirective {

  constructor(){

  }

  @HostBinding('class.bg') isBgColor=true;

  @Input() set appBgcolor(value){
    this.isBgColor=value;
  }
}