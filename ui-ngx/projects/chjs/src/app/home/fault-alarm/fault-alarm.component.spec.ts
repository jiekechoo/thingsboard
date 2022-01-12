import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultAlarmComponent } from './fault-alarm.component';

describe('FaultAlarmComponent', () => {
  let component: FaultAlarmComponent;
  let fixture: ComponentFixture<FaultAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultAlarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
