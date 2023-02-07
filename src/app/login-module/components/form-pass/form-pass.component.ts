import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VALIDATORS, VALIDATORS_ERRORS } from 'src/app/shared-module/validations/validations';

@Component({
  selector: 'app-form-pass',
  templateUrl: './form-pass.component.html',
  styleUrls: ['./form-pass.component.scss'],
})
export class FormPassComponent {
  public validatorsErrors = VALIDATORS_ERRORS;
  public label = 'login.password';
  public formPass: FormGroup = new FormGroup({
    password: new FormControl('', VALIDATORS.password),
  });
  public password = this.formPass.get('password') as FormControl;

  public continue(): void {}
}
