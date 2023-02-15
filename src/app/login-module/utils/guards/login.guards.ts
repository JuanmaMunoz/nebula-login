import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { SessionService } from 'src/app/shared-module/services/session.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad {
  constructor(private sessionService: SessionService, private router: Router) {}

  canLoad(): Observable<boolean> {
    return this.sessionService.stayLogin.pipe(
      tap((stay: boolean) => {
        if (!stay) {
          this.router.navigate(['/users']);
        }
      })
    );
  }
}
