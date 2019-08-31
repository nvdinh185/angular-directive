import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPrams]'
})
export class PramsDirective {
  //Nhận tham số từ template
  @Input('param') myParam: string;

  //Hàm khởi tạo
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = "red";
    console.log(this.el)
  }
  
  //Hàm chạy mặc định
  ngOnInit(){
    console.log(this.myParam)
  }
}
