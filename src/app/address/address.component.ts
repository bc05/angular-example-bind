import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IAddress {
  state: string;
  city: string;
}

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;

  @Output() formChange: EventEmitter<IAddress> = new EventEmitter<IAddress>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      state: [null, Validators.required],
      city: [null, Validators.required],
    });

    this.addressForm.valueChanges.subscribe((address) => {
      if (this.addressForm.valid) {
        this.formChange.emit(address);
      }
    });
  }
}
