import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VALIDATORS, VALIDATORS_ERRORS } from 'src/app/shared-module/utils/validations/validations';

@Component({
  selector: 'app-form-pass',
  templateUrl: './form-pass.component.html',
  styleUrls: ['./form-pass.component.scss'],
})
export class FormPassComponent {
  @Output() sendPassword: EventEmitter<string> = new EventEmitter();
  @Output() back: EventEmitter<string> = new EventEmitter();
  public validatorsErrors = VALIDATORS_ERRORS;
  public label = 'login.password';
  public formPass: FormGroup = new FormGroup({
    password: new FormControl('', VALIDATORS.password),
  });
  public passwordControl = this.formPass.get('password') as FormControl;

  public continue(): void {
    this.sendPassword.emit(this.passwordControl.value);
  }

  public goBack(): void {
    this.back.emit('email');
  }
}
