import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISession } from 'src/app/shared-module/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public login(user: string, pass: string): Observable<ISession> {
    const url = environment.apiUrl + '/auth/login/first';
    const body = { username: user, password: pass };
    return this.http.post<ISession>(url, body);
  }
}
