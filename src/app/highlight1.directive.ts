import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight1]'
})
export class Highlight1Directive {

  /**
   * Hàm khởi tạo:
   * Ban đầu thì gán cho màu của chữ là 'blue'
   * @param el 
   */
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = "blue";
    // console.log(this.el.nativeElement.style.color)
  }

  /**
   * Hàm này để thay đổi màu nền
   * Tham số truyền vào là màu cần thay đổi
   */
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  /**
   * Sử dụng Decorator HostListener để thay đổi 
   * màu chữ và màu nền khi di chuyển chuột vào phần tử
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = "red";
    this.highlight("blue");
  }

  /**
   * Sử dụng Decorator HostListener để thay đổi 
   * màu chữ và màu nền khi di chuyển chuột ra khỏi phần tử
   */
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = "green";
    this.highlight(null);
  }
}