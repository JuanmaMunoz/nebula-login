import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private router: Router,private route: ActivatedRoute){

  }
  public ngOnInit(): void {
    this.checkSession();
  }

  public login(): void{
    console.log('login....');
    this.createSession();
  }

  private createSession():void{
    localStorage.setItem('nebulaSession','xxxtoken');
    //this.router.navigate(['../users'],{relativeTo:this.route})
    this.redirect();
  }

  private checkSession(){
    if(localStorage.getItem('nebulaSession')) this.redirect();
  }

  private redirect(){
    this.router.navigate(['/users'])
  }

  public recovery(){
    this.router.navigate(['/login/recovery'])
  }


}
