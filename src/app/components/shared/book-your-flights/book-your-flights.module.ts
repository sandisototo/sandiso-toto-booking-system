import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BookYourFlightsComponent } from './book-your-flights.component';

@NgModule({
  declarations: [
    BookYourFlightsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    BookYourFlightsComponent,
  ],
})
export class BookYourFlightsModule { }
