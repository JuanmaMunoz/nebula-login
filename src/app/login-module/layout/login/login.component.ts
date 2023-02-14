import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { assetUrl } from 'src/single-spa/asset-url';
import { IToken } from '../../models/interfaces';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public logoUrl: string = assetUrl('images/svg/logo.svg');
  public title: string = 'login.title';
  public description: string = 'login.description';
  public phase: string = 'email';
  public email: string = '';
  public password: string = '';
  private subscription = new Subscription();
  public errorLogin: Subject<any> = new Subject();

  constructor(private router: Router, private loginService: LoginService) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getEmail(email: string) {
    this.email = email;
    this.changePhase('password');
  }

  public getPassword(password: string) {
    this.password = password;
    this.login();
  }

  public changePhase(phase: string) {
    this.phase = phase;
  }

  private login(): void {
    this.subscription.add(
      this.loginService.login(this.email, this.password).subscribe({
        next: (token: IToken) => {
          console.log(token);
        },
        error: (e) => {
          this.errorLogin.next({ invalidCredentials: 'login.invalidCredentials' });
        },
      })
    );
  }
}
