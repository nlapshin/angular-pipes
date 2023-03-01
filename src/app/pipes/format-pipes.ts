import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'myFormat'
})
export class MyFormatPipe implements PipeTransform {
  transform(value: string, separator: string = '___'): string {
    return value.toString().replace(/\./g, separator);
  }
}
