import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { ISession } from 'src/app/shared-module/models/interfaces';
import { SessionService } from 'src/app/shared-module/services/session.service';
import { assetUrl } from 'src/single-spa/asset-url';
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
  public loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private router: Router, private loginService: LoginService, private sessionService: SessionService) {}

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
    this.loading.next(true);
    this.subscription.add(
      this.loginService.login(this.email, this.password).subscribe({
        next: (session: ISession) => {
          this.loading.next(false);
          this.createSession(session);
        },
        error: (e: HttpErrorResponse) => {
          this.loading.next(false);
          this.errorLogin.next({ invalidCredentials: 'login.invalidCredentials' });
        },
      })
    );
  }

  createSession(session: ISession): void {
    this.sessionService.createSession(session);
    this.router.navigate(['/users']);
  }
}
