import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IToken } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: string, pass: string): Observable<IToken> {
    const url = environment.apiUrl + '/auth/login/first';
    const body = { username: user, password: pass };
    return this.http.post<IToken>(url, body);
  }
}
