import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookYourHotelsComponent } from './book-your-hotels.component';

describe('BookYourHotelsComponent', () => {
  let component: BookYourHotelsComponent;
  let fixture: ComponentFixture<BookYourHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookYourHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookYourHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
