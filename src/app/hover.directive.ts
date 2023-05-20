import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  color: string = 'lightBlue';

  constructor(private element: ElementRef) { 
    // console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }
}
