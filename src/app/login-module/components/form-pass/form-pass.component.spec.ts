import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPassComponent } from './form-pass.component';

describe('FormPassComponent', () => {
  let component: FormPassComponent;
  let fixture: ComponentFixture<FormPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPassComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
