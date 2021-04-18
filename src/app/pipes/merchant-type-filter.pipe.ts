import { Pipe, PipeTransform } from '@angular/core';
import { Merchant } from '../dtos/merchant';

@Pipe({
  name: 'merchantTypeFilter'
})
export class MerchantTypeFilterPipe implements PipeTransform {
  private defaultType: string = 'Guusto Card';

  transform(items: Merchant[], type: string): Merchant[] {
    if (!items) {
      return [];
    }

    if (!type) {
      return items;
    }
    
    type = type.toLocaleLowerCase();

    return items.filter(item => {
      if (item.type){
        return item.type.toLocaleLowerCase() == type;
      }
      else{
        return this.defaultType.toLocaleLowerCase() == type;
      }
    });
  }

}
