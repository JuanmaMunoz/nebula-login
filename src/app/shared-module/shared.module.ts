import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { assetUrl } from 'src/single-spa/asset-url';
import { InputTextComponent } from './components/input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrors } from './utils/pipes/validation-errors.pipe';
import { PassTextComponent } from './components/pass-text/pass-text.component';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { LanguageService } from './services/language.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { LibModule } from 'lib';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, `${assetUrl('i18n/')}`, '.json');
}

@NgModule({
  declarations: [HeaderComponent, InputTextComponent, ValidationErrors, PassTextComponent, SelectLanguageComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    LibModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [LanguageService],
  exports: [HeaderComponent, InputTextComponent, PassTextComponent, SelectLanguageComponent],
})
export class SharedModule {}
