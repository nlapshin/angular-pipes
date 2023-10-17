import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, discount: number , roundCnt : number = 0): number {
    return +((value * (100 - discount)) / 100).toFixed(roundCnt);
  }
}
