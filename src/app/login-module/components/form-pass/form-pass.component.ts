import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FontWeight, ILabel, TextColor, TypeColor } from 'lib';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { VALIDATIONS, VALIDATIONS_ERRORS } from 'src/app/shared-module/utils/validations/validations';

@Component({
  selector: 'app-form-pass',
  templateUrl: './form-pass.component.html',
  styleUrls: ['./form-pass.component.scss'],
})
export class FormPassComponent implements OnInit, OnDestroy {
  @Output() sendPassword: EventEmitter<string> = new EventEmitter();
  @Output() back: EventEmitter<string> = new EventEmitter();
  @Input() password: string = '';
  @Input() errorLogin: Subject<any> = new Subject();
  @Input() loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public validationsErrors = VALIDATIONS_ERRORS;
  public label: ILabel = {
    text: 'login.password',
    color: TextColor.Secondary,
    fontWeight: FontWeight.Bold,
  };
  public formPass: FormGroup = {} as FormGroup;
  public passwordControl: FormControl = {} as FormControl;

  public subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.errorLogin.subscribe((error: any) => {
        if (error) {
          this.passwordControl.markAsDirty();
          this.passwordControl.setErrors(error);
        }
      })
    );
    this.formPass = new FormGroup({
      password: new FormControl(this.password, VALIDATIONS.password),
    });
    this.passwordControl = this.formPass.get('password') as FormControl;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public continue(): void {
    this.sendPassword.emit(this.passwordControl.value);
  }

  public goBack(): void {
    this.back.emit('email');
  }
}
