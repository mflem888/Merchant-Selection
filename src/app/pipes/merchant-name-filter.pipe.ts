import { Pipe, PipeTransform } from '@angular/core';
import { Merchant } from '../dtos/merchant';

@Pipe({
  name: 'merchantNameFilter'
})
export class MerchantNameFilterPipe implements PipeTransform {

  transform(items: Merchant[], searchText: string): Merchant[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }
    
    searchText = searchText.toLocaleLowerCase();

    return items.filter(item => {
      return item.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
