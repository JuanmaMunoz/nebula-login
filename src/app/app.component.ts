import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'nebula-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nebula-login';
  public backGroundUrl: string = assetUrl('images/png/background_login.png');
  constructor(private router: Router){
  }

  login(){
    this.router.navigate(['users']);
  }
}
