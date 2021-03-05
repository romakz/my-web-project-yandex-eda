import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productValueFormat'
})
export class ProductValueFormatPipe implements PipeTransform {

  transform(value: number, type: string): string {
    if (type === 'г') {
      if (value < 1000) {
        return value + ' г';
      } else {
        return value / 1000 + ' кг';
      }
    }

    if (type === 'л') {
      if (value < 1000) {
        return value + ' мл';
      } else {
        return value / 1000 + ' л';
      }
    }
  }

}
