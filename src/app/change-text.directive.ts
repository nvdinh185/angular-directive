import { Directive, ElementRef } from '@angular/core';

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

}
