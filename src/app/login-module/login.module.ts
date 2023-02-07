import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { assetUrl } from 'src/single-spa/asset-url';
import { SharedModule } from '../shared-module/shared.module';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormPassComponent } from './components/form-pass/form-pass.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, `${assetUrl('i18n/')}`, '.json');
}
const routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, FormUserComponent, FormPassComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class LoginModule {}
