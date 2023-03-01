import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'myFormatArray'
})
export class MyFormatArrayPipe implements PipeTransform {
  transform(value: string[], separator: string = '___'): string {
    return value.join(separator);
  }
}
