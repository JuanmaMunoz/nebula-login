import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IJwt, ISession } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public session: ISession = {} as ISession;
  public jwt: IJwt = {} as IJwt;
  public stayLogin: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {}

  private getJwt(token: string): IJwt {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public createSession(session: ISession): void {
    localStorage.setItem('nebulaSession', JSON.stringify(session));
  }

  public recoverySession(): void {
    const session = localStorage.getItem('nebulaSession');
    if (session) {
      this.session = JSON.parse(session);
      const jwt = this.getJwt(this.session.token);
      this.checkSession(jwt);
    }
  }

  private checkSession(jwt: IJwt): void {
    jwt.exp > new Date().getTime() ? this.stayLogin.next(true) : this.stayLogin.next(false);
  }
}
