import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trouble-login',
  templateUrl: './trouble-login.component.html',
  styleUrls: ['./trouble-login.component.scss'],
})
export class TroubleLoginComponent {
  @Input() phase: string = '';
}
