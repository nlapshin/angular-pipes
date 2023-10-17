import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { DiscountPipe } from './pipes/discount';
import { MyFormatPipe } from './pipes/format-pipes';
import { MyFormatArrayPipe } from './pipes/format-array-pipes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormatPipe,
    MyFormatArrayPipe,
    DiscountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
