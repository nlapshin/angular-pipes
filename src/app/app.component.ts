import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

// <div>С форматированием: {{currentDate | date:"dd.MM.yyyy hh:mm"}}</div>

// <!-- С параметрами -->
// <div>{{hello | slice:0:5}}</div>
// <div>{{hello | slice:6}}</div>

// <!-- Цепочка -->
// <div>{{hello | slice:0:5 | uppercase}}</div>

// <!-- Кастомный -->
// <div>{{customString | myFormat}}</div>
// <div>{{customString | myFormat:"------"}}</div>

// <div>Цена: {{price | currency}}. Со скидкой:{{price | discount:33:2 | currency}}</div>

// <!-- Pure -->
// <input [(ngModel)]="customInputString" name="input"/>
// <div>{{customInputString | myFormat:"----"}}</div>

// <!-- Impure -->
// <input #car name="car" class="form-control">
// <button class="btn" (click)="addCar(car.value)">Add Carr</button>
// <div>{{cars | myFormatArray:", "}}</div>

// <!-- Часы -->
// <div>{{currentTime | date:"HH:mm:ss"}}</div>
// <div>{{clock | async | date:"HH:mm:ss"}}</div>

// <div>{{promise | async }}</div>


// :"dd.MM.yyyy hh:mm"

@Component({
  selector: 'app-root',
  template: `
    <div>
      <!-- Простой пайп -->
      <div>Без форматирования: {{currentDate}}</div>
      <div>С форматированием: {{currentDate | date:"dd.MM.yyyy hh:mm"}}</div>

      <div>{{hello | titlecase}}</div>

      <div>{{obj | json}}</div>

      <div>{{customString | myFormat:"-------"}}</div>

      <div>Цена со скидкой:{{price | discount:13}}</div>

      <input [(ngModel)]="customInputString" name="input"/>
      <div>{{customInputString | myFormat:"----"}}</div>

      <input #car name="car" class="form-control">
      <button class="btn" (click)="addCar(car.value)">Add Carr</button>
      <div>{{cars | myFormatArray:", "}}</div>

      <div>{{currentTime | date:"HH:mm:ss"}}</div>
      <div>{{clock | async | date:"HH:mm:ss"}}</div>
      <div>{{promise | async}}</div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDate = new Date(); // date
  hello = "Hello World!"
  customString = "Hello.World";

  obj = { key: 'value' }

  price = 123442;

  cars = ['bmw', 'audi', 'lada'];

  customInputString = 'Hello.world'

  currentTime: Date = new Date();
  clock: Observable<Date> | undefined;

  promise = Promise.resolve('100500');

  constructor() {
    // interval - аналог setInterval
    interval(1000).pipe((map(()=> new Date()))).subscribe((val) => {
      // val - это дата, которая приходит каждую секунду
      console.log('update');
      this.currentTime = val;
    });

    this.clock = interval(1000).pipe((map(()=> new Date())));
  }

  private formatDate() {
    // Готовый пакет date-fns
    // return this.currentDate.getFullYear() + '.'
  }

  // Как работать со не примитивами в pipe и следить за изменениями
  // 1. pure: false // impure
  // 2. Меняем по ссылке сложные переменные.

  // for (i = 0; i < 10000) {
  //   arr.push() // вместо пуша сделать concat
  // }

  public addCar(car: string) {
    this.cars.push(car);
    // this.cars = [
    //   ...this.cars,
    //   car
    // ] // Меняем ссылку.
  }





  // customString = "Hello.World";
  // customInputString = 'Custom.input';
  // price = 123;

  // cars = ['bmw', 'audi', 'lada'];

  // currentTime: Date = new Date();
  // clock: Observable<Date>|undefined;

  // promise = Promise.resolve('100500');

  // constructor() {
  //   // interval - аналог setInterval
  //   interval(1000).pipe((map(()=> new Date()))).subscribe((val) => {
  //     // val - это дата, которая приходит каждую секунду
  //     console.log('update');
  //     this.currentTime = val;
  //   });

  //   this.clock = interval(1000).pipe((map(()=> new Date())));
  // }

  // public addCar(car: string) {
  //   this.cars = [
  //     ...this.cars,
  //     car
  //   ] // Меняем ссылку.
  // }
}

// Допустим нам надо создать часы, которые будут обновляться.





// Есть примитивы - это string, number и т.д.
// Есть сложные типы - это Object(Array и т.д.)

// let a = { key: 'value' };
// a.key = 'new value'; // это изменение будет проверено?

// a = {
//   ...a,
//   ...{ key: 'new value' }
// };

// const b = a;

// console.log(a === b); // true? и a и b ссылаются на одну и ту же переменую a

// Задание.
// Создайте пайп который берет цену(price) и высчитывает скидку для товара, скидка в процентах.
// price | discount:25 -> price это цена, discount - это pipe-скидка, параметр - это процент скидки.
// 100 | discount:25 -> 75.














// import { Observable, interval } from 'rxjs';
// import { map } from 'rxjs/operators';
//       <!-- С параметрами -->

//       <div>С форматированием: {{currentDate | date:"dd/MM/yyyy"}}</div>

//       <!-- Async -->
//       <div>{{currentTime | date:"HH:mm:ss"}}</div>
//       <div>{{clock | async | date:"HH:mm:ss"}}</div>

// hello = "Hello World!";


//   clock: Observable<Date>|undefined;
//   currentTime: Date = new Date();

//   constructor() {
//     interval(1000).pipe((map(()=> new Date()))).subscribe((val) => {
//       this.currentTime = val;
//     });
//     this.clock = interval(1000).pipe((map(()=> new Date())));
//   }

//   public addCar(car: string) {
//     this.cars.push(car);

//     console.log('this.cars', this.cars);
//   }
