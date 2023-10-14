import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.class';

@Pipe({
  name: 'searchItem'
})
export class SearchItemPipe implements PipeTransform {

  transform(items: Item[], substr: string = ""): Item[] {
    if(substr === "") return items;

    let selectedItems: Item[] = [];
    for (let i of items) {
      if(i.name.toLowerCase().includes(substr.toLowerCase())) {
        selectedItems.push(i)
      }
    }
    return selectedItems;
  }
}
