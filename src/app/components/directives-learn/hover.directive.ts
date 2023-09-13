import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirective {

  @HostBinding('class.card-outline-primary') isHovering: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') onMouseOver() {
    const cardText = this.elementRef.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(cardText, 'display', 'block');
    this.isHovering = true;
  }
  
  @HostListener('mouseout') onMouseOut() {
    const cardText = this.elementRef.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(cardText, 'display', 'none');
    this.isHovering = false;
  }

}
