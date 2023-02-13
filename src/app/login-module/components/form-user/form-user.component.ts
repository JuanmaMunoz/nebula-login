import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VALIDATORS, VALIDATORS_ERRORS } from 'src/app/shared-module/utils/validations/validations';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  @Input() email: string = '';
  @Output() sendEmail: EventEmitter<string> = new EventEmitter();
  public validatorsErrors = VALIDATORS_ERRORS;
  public label = 'login.email';
  public formUser: FormGroup = {} as FormGroup;
  public emailControl: FormControl = {} as FormControl;

  ngOnInit(): void {
    this.formUser = new FormGroup({
      email: new FormControl(this.email, VALIDATORS.email),
    });
    this.emailControl = this.formUser.get('email') as FormControl;
  }

  public continue(): void {
    this.email = this.emailControl.value;
    this.sendEmail.emit(this.email);
  }
}
