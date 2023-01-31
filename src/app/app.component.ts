import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nebula-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nebula-login';

  constructor(private router: Router){
  }

  login(){
    this.router.navigate(['users']);
  }
}
