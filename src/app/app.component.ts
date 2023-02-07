import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent, Subscription } from 'rxjs';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'nebula-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nebula-login';
  private subscription = new Subscription();
  public languageSelected: string = localStorage.getItem('nebulaLanguage') || 'en';
  public backGroundUrl: string = assetUrl('images/png/background_login.png');
  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('es');
    this.useLanguage();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  login() {
    this.router.navigate(['users']);
  }

  useLanguage(): void {
    this.translate.use(this.languageSelected);
    localStorage.setItem('nebulaLanguage', this.languageSelected);
  }
}
