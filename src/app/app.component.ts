import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  personForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      name: ['Jhon', Validators.required],
      age: ['18', Validators.required],
    });
  }

  onSave() {
    // here,send data to API
    console.log('send data API');
  }
}
