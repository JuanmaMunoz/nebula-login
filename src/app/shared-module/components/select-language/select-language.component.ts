import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { showHideStatus } from '../../utils/effects/effects';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
  animations: [showHideStatus],
})
export class SelectLanguageComponent {
  public show: boolean = false;
  constructor(public languageService: LanguageService) {}

  public showHide(): void {
    this.show = !this.show;
  }

  public changeLanguage(language: string): void {
    this.showHide();
    this.languageService.changeLanguage(language);
  }
}
