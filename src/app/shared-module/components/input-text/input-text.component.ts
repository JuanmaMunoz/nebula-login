import { FormControl } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() label: string = '';
  @Input() validatorsErrors: any;
  @Input() focus: boolean = false;
  @ViewChild('input') input: ElementRef = {} as ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.focus) this.input.nativeElement.focus();
  }
}
