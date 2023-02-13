import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public languageList: string[] = ['es', 'en'];
  public languageSelected: string = localStorage.getItem('nebulaLanguage') || 'en';
  constructor(private translate: TranslateService) {
    this.useLanguage();
  }

  useLanguage(): void {
    this.translate.use(this.languageSelected);
    localStorage.setItem('nebulaLanguage', this.languageSelected);
  }

  changeLanguage(language: string): void {
    this.languageSelected = language;
    this.useLanguage();
  }
}
