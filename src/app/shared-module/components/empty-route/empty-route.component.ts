import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-route',
  template: '',
})
export class EmptyRouteComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['/login/auth']);
  }
}
