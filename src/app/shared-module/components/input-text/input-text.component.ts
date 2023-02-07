import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() validatorsErrors: any;
  constructor() {}

  ngOnInit(): void {}
}
