import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('💕 This imag fail', this.elHost)
    elNative.src = '../../../assets/noimg.jpg'
  }

  constructor(private elHost: ElementRef) {
    console.log(this.elHost)
   }

}
