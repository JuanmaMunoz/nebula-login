import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit{
  constructor(private router: Router,private route: ActivatedRoute){
  }

  public ngOnInit(): void {
  }

  public recovery(): void{
    console.log('Recovery....');
  }


  public redirect(){
    this.router.navigate(['/users']);
  }

  public goLogin(){
    this.router.navigate(['/login']);
  }


}
