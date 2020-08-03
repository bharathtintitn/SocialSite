import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Client } from './client';


function emailMatcher(c: AbstractControl): { [key: string]: boolean} | null {

  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }

  return { 'match': true};
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  clientForm: FormGroup;
  client = new Client();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.clientForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: '',
      phoneNumber: ['', [Validators.required]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]]
      }, { Validator: emailMatcher}),
    });
  }

  save() {
    console.log(this.clientForm);
    console.log('Saved: ' + JSON.stringify(this.clientForm.value));
  }

  getErrorMessage(): void {

  }
  populateTestData(): void {
    this.clientForm.patchValue({
      firstName: 'Bharath',
      lastName: 'Mylarappa',
      email: 'bharathtintin@yahoo.co.in',
      phoneNumber: '619-607-5327'
    });
  }
}
