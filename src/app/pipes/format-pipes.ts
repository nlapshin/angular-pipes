import { Pipe, PipeTransform } from '@angular/core';

// Название файла через дефис -
// Само название camelCase
@Pipe({
    name: 'myFormat'
})
export class MyFormatPipe implements PipeTransform {
  transform(value: string, separator: string = '___'): string {
    // value -> toString() -> всё заменяет на separator
    return value.toString().replace(/\./g, separator);
  }
}

// Создайте пайп который берет цену(price) и высчитывает скидку для товара, скидка в процентах.
// price | discount:25 -> price это цена, discount - это pipe-скидка, параметр - это процент скидки.
// 100 | discount:25 -> 75.


    // value -> toString() -> заменяем все . на указанный разделитель
    // Hello.world -> Hello___world

// примитивные переменные
// string, boolean, number и т.д.
// Поменяли значение, pipe подхватил его и применил функцию
// И для объектов если поменялась ссылка.
