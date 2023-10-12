import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order.class';

@Pipe({
  name: 'searchOrder'
})
export class SearchOrderPipe implements PipeTransform {

  transform(ords: Order[], substr: string = ""): Order[] {
    if(substr === "") return ords;
    
    let selectedEmployees: Order[] = [];
    for(let o of ords) {
      if(
        o.description.toLowerCase().includes(substr.toLowerCase())
      ) {
        selectedEmployees.push(o)
      }
    }
    return selectedEmployees;
  }

}
