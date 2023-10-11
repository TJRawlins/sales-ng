import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.class';

@Pipe({
  name: 'searchEmployee'
})
export class SearchEmployeePipe implements PipeTransform {

  transform(emps: Employee[], substr: string = ""): Employee[] {
    if(substr === "") return emps;
    
    let selectedEmployees: Employee[] = [];
    for(let c of emps) {
      if(
        c.email.toLowerCase().includes(substr.toLowerCase())
      ) {
        selectedEmployees.push(c)
      }
    }
    return selectedEmployees;
  }

}
