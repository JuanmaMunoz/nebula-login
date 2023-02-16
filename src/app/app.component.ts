import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
import { LanguageService } from './shared-module/services/language.service';

@Component({
  selector: 'nebula-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public backGroundUrl: string = assetUrl('images/png/background_login.png');
  constructor(private languageService: LanguageService) {}
}
