import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myFormatArray',
    pure: true // но это по умолчанию
})
export class MyFormatArrayPipe implements PipeTransform {
  transform(value: string[], separator: string = '___'): string {
    return value.join(separator);
  }
}
