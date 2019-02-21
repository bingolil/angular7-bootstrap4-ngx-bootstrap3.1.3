import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginUiComponent } from './begin-ui.component';

describe('BeginUiComponent', () => {
  let component: BeginUiComponent;
  let fixture: ComponentFixture<BeginUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
