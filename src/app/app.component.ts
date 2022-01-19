import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAddress } from './address/address.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  personForm: FormGroup;
  address: IAddress;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
    });
  }

  onFormChange(addressFormValues: IAddress) {
    this.address = addressFormValues;
  }

  onSave() {
    // here,send data to API
    console.log('send data API', {
      ...this.personForm.value,
      address: this.address,
    });
  }
}
