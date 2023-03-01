import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <!-- Простой пайп -->
      <div>Без форматирования: {{currentDate}}</div>
      <div>С форматированием: {{currentDate | date}}</div>
      <!-- С параметрами -->
      <div>{{hello | slice:0:5}}</div>
      <div>{{hello | slice:6}}</div>
      <div>С форматированием: {{currentDate | date:"dd/MM/yyyy"}}</div>
      <!-- Цепочка -->
      <div>{{hello | slice:0:5 | uppercase}}</div>
      <!-- Кастомный -->
      <div>{{customString | myFormat}}</div>
      <div>{{customString | myFormat:"----"}}</div>
      <!-- Pure -->
      <input [(ngModel)]="customInputString" name="input"/>
      <div>{{customInputString | myFormat:"----"}}</div>
      <!-- Impure -->
      <input #car name="car" class="form-control">
      <button class="btn" (click)="addCar(car.value)">Add Carr</button>
      <div>{{cars | myFormatArray:", "}}</div>
      <!-- Async -->
      <div>{{currentTime | date:"HH:mm:ss"}}</div>
      <div>{{clock | async | date:"HH:mm:ss"}}</div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDate = new Date();
  hello = "Hello World!";
  customString = "Hello.World";
  customInputString = 'Custom.input';
  cars = ['bmw', 'audi', 'lada'];
  clock: Observable<Date>|undefined;
  currentTime: Date = new Date(); 

  constructor() {
    interval(1000).pipe((map(()=> new Date()))).subscribe((val) => {
      this.currentTime = val;
    });
    this.clock = interval(1000).pipe((map(()=> new Date())));
  }

  public addCar(car: string) {
    this.cars.push(car);

    console.log('this.cars', this.cars);
  }
}
