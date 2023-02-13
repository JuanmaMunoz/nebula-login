import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleLoginComponent } from './trouble-login.component';

describe('TroubleLoginComponent', () => {
  let component: TroubleLoginComponent;
  let fixture: ComponentFixture<TroubleLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroubleLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroubleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
