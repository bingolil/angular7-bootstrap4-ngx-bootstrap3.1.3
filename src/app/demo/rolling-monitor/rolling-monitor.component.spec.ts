import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingMonitorComponent } from './rolling-monitor.component';

describe('RollingMonitorComponent', () => {
  let component: RollingMonitorComponent;
  let fixture: ComponentFixture<RollingMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
