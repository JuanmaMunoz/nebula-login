import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { assetUrl } from 'src/single-spa/asset-url';
import { SharedModule } from '../shared-module/shared.module';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormPassComponent } from './components/form-pass/form-pass.component';
import { FooterComponent } from './components/footer/footer.component';
import { TroubleLoginComponent } from './components/trouble-login/trouble-login.component';
import { LoginService } from './services/login.service';

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
  declarations: [LoginComponent, FormUserComponent, FormPassComponent, FooterComponent, TroubleLoginComponent],
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
})
export class LoginModule {}
