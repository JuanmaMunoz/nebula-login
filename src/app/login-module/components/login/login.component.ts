import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public logoUrl: string = assetUrl('images/svg/logo.svg');
  public title: string = 'login.title';
  public description: string = 'login.description';
  constructor(private router: Router) {}
  public ngOnInit(): void {
    this.checkSession();
  }

  public login(): void {
    console.log('login....');
    this.createSession();
  }

  private createSession(): void {
    localStorage.setItem('nebulaSession', 'xxxtoken');
    //this.router.navigate(['../users'],{relativeTo:this.route})
    this.redirect();
  }

  private checkSession() {
    if (localStorage.getItem('nebulaSession')) this.redirect();
  }

  private redirect() {
    this.router.navigate(['/users']);
  }

  public recovery() {
    this.router.navigate(['/login/recovery']);
  }
}
