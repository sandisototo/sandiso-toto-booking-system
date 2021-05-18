import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookYourFlightsComponent } from './book-your-flights.component';

// #TODO: setup unit tests/mock data
describe('BookYourFlightsComponent', () => {
  let component: BookYourFlightsComponent;
  let fixture: ComponentFixture<BookYourFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookYourFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookYourFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
