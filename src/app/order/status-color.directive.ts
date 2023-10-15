import { Directive, ElementRef } from '@angular/core';
import { Order } from './order.class';

@Directive({
  selector: '[appStatusColor]'
})


export class StatusColorDirective {
  id = 0;
  
  constructor(
    private el: ElementRef,
  ) { 
    setTimeout(() => {
      let td = this.el.nativeElement
        // console.log(td)
        if (td.innerText === "OK") {
          td.classList.add('status-ok')
        }
        else if (td.innerText === "BACKORDER") {
          td.classList.add('status-bo')
        } 
        else if (td.innerText === "CLOSED") {
          td.classList.add('status-closed')
        } 
        else {
          td.classList.add('status-ok')
        }
    }, 10);
  }
}

