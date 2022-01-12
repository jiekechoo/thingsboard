import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasAlarmComponent } from './gas-alarm.component';

describe('GasAlarmComponent', () => {
  let component: GasAlarmComponent;
  let fixture: ComponentFixture<GasAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasAlarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GasAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
