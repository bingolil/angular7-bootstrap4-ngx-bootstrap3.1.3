import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowIe9Component } from './low-ie9.component';

describe('LowIe9Component', () => {
  let component: LowIe9Component;
  let fixture: ComponentFixture<LowIe9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowIe9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowIe9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
