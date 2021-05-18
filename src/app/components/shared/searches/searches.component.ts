import { Component } from '@angular/core';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss'],
})
export class SearchesComponent {

  bookingType = 'flights';

  changeBookingType(bookingType: string): void {
    this.bookingType = bookingType;
  }

}
