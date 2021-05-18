import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchesComponent } from './searches.component';
import { BookYourFlightsModule } from '../book-your-flights/book-your-flights.module';
import { BookYourHotelsModule } from '../book-your-hotels/book-your-hotels.module';

@NgModule({
  declarations: [
    SearchesComponent,
  ],
  imports: [
    CommonModule,
    BookYourFlightsModule,
    BookYourHotelsModule,
  ],
  exports: [
    SearchesComponent,
  ]
})
export class SearchesModule { }
