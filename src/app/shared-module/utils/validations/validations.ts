import { Validators } from '@angular/forms';

export const VALIDATIONS = {
  password: [Validators.required],
  email: [Validators.required, Validators.email],
};

export const VALIDATIONS_ERRORS = {
  email: {
    required: 'validations.email.required',
    email: 'validations.email.invalid',
  },
  password: {
    required: 'validations.password.required',
    invalidCredentials: 'validations.invalidCredentials',
  },
};
