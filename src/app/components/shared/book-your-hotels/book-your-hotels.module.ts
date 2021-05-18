import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookYourHotelsComponent } from './book-your-hotels.component';

@NgModule({
  declarations: [
    BookYourHotelsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BookYourHotelsComponent,
  ],
})
export class BookYourHotelsModule { }
