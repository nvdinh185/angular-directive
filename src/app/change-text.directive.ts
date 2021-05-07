import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  /**
   * Hàm khởi tạo:
   * Thay đổi hiển thị bằng cách chèn thêm dòng text vào
   */
  constructor(private el: ElementRef) {
    this.el.nativeElement.innerText = "học lập trình online miễn phí";
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = "cyan";
    this.el.nativeElement.innerText = "học lập trình online miễn phí";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = null;
  }

}
