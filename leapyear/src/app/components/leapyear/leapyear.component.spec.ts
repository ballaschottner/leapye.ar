import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapyearComponent } from './leapyear.component';

describe('LeapyearComponent', () => {
  let component: LeapyearComponent;
  let fixture: ComponentFixture<LeapyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeapyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeapyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
