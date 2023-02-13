import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validationErrors',
})
export class ValidationErrors implements PipeTransform {
  transform(errors: any, errorsForm: any): any {
    if (errors) {
      console.log(errors);
      return errorsForm[Object.keys(errors)[0]];
    }
  }
}
