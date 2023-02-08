import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pass-text',
  templateUrl: './pass-text.component.html',
  styleUrls: ['./pass-text.component.scss'],
})
export class PassTextComponent implements AfterViewInit {
  @Input() control: FormControl = new FormControl();
  @Input() label: string = '';
  @Input() validatorsErrors: any;
  @Input() focus: boolean = false;
  @ViewChild('input') input: ElementRef = {} as ElementRef;
  public showPass = false;
  public type: string = 'password';

  public changeShowPass(): void {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  ngAfterViewInit(): void {
    if (this.focus) this.input.nativeElement.focus();
  }
}
