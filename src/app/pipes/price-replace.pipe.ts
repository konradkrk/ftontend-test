import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceReplace',
})
export class PriceReplacePipe implements PipeTransform {
  transform(value: number): number {
    if (!value) {
      return 0;
    }

    return value / 100;
  }
}
