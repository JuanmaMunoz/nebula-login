import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IDropDown, IDropDownItem, SizeBtn, TypeBtn } from 'lib';
import { LanguageService } from '../../services/language.service';
import { showHideStatus } from '../../utils/effects/effects';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
  animations: [showHideStatus],
})
export class SelectLanguageComponent {
  public open: boolean = false;
  public languageSelected: string = '';
  public dropDown: IDropDown = {} as IDropDown;
  constructor(public languageService: LanguageService, private translateService: TranslateService) {}

  ngOnInit(): void {
    this.fillDropDown();
  }

  public showHide(): void {
    this.open = !this.open;
  }

  public changeLanguage(language: string): void {
    this.showHide();
    this.languageService.changeLanguage(language);
    this.fillDropDown();
  }

  fillDropDown(): void {
    this.dropDown = {
      label: this.languageService.languageSelected,
      typeBtn: TypeBtn.OutLight,
      sizeBtn: SizeBtn.Standard,
      dropDownList: this.languageService.languageList
        .filter((e) => e != this.languageService.languageSelected)
        .map((e: any) => (e = { name: e, text: e })),
    };
    this.open = false;
  }
}
