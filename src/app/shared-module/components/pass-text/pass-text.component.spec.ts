import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassTextComponent } from './pass-text.component';

describe('PassTextComponent', () => {
  let component: PassTextComponent;
  let fixture: ComponentFixture<PassTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
