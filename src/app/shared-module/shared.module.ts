import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { assetUrl } from 'src/single-spa/asset-url';
import { InputTextComponent } from './components/input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrors } from './pipes/validation-errors.pipe';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, `${assetUrl('i18n/')}`, '.json');
}

@NgModule({
  declarations: [HeaderComponent, InputTextComponent, ValidationErrors],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [HeaderComponent],
})
export class SharedModule {}
