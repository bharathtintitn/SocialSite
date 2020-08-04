import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
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
  emailMessage: string;

  private validationMessage = {
    required: 'Please enter your email',
    email: 'Please enter a valid email'
  }
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

    this.clientForm.get('gender').valueChanges.subscribe(
      value => console.log(value)
    );

    const emailControl = this.clientForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(debounceTime(1000)).subscribe(
      value => this.setMessage(emailControl)
    )
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

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty)  && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessage[key]).join(' ');
    }
  }
}
