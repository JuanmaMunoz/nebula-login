import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VALIDATORS, VALIDATORS_ERRORS } from 'src/app/shared-module/validations/validations';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent {
  public validatorsErrors = VALIDATORS_ERRORS;
  public label = 'login.email';
  public formUser: FormGroup = new FormGroup({
    email: new FormControl('', VALIDATORS.email),
  });
  public email = this.formUser.get('email') as FormControl;

  public continue(): void {}
}
