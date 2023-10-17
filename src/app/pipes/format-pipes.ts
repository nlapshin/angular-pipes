import { Pipe, PipeTransform } from '@angular/core';


// Название файла через дефис -
// Само название camelCase
@Pipe({
    name: 'myFormat'
})
export class MyFormatPipe implements PipeTransform {
  transform(value: string, separator: string = '___'): string {
    // value -> toString() -> заменяем все . на указанный разделитель
    // Hello.world -> Hello___world
    return value.toString().replace(/\./g, separator);
  }
}
