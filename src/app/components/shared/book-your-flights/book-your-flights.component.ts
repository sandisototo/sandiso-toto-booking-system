import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-book-your-flights',
  templateUrl: './book-your-flights.component.html',
})
export class BookYourFlightsComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      from: [null, [
        // #TODO: date validator
        Validators.minLength(3),
      ]],
      to: [null, [
        Validators.minLength(3),
      ]],
      departure: [null, [
        // #TODO: custom date format validator, valid start date validator (today+)
        Validators.required,
      ]],
      return: [null, [
        // #TODO: as per Departure
        Validators.required,
      ]],
      adults: [2, [
        Validators.min(1),
      ]],
    });
  }

  public submit(): void {
    console.info('Call booking service (API)');
  }

  get from(): AbstractControl {
    return this.formGroup.get('from');
  }

  get to(): AbstractControl {
    return this.formGroup.get('to');
  }

  get departure(): AbstractControl {
    return this.formGroup.get('departure');
  }

  get return(): AbstractControl {
    return this.formGroup.get('return');
  }

  get adults(): AbstractControl {
    return this.formGroup.get('adults');
  }

}
