import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnScrollComponent } from './own-scroll.component';

describe('OwnScrollComponent', () => {
  let component: OwnScrollComponent;
  let fixture: ComponentFixture<OwnScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
