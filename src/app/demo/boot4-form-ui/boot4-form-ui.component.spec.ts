import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boot4FormUiComponent } from './boot4-form-ui.component';

describe('Boot4FormUiComponent', () => {
  let component: Boot4FormUiComponent;
  let fixture: ComponentFixture<Boot4FormUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boot4FormUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boot4FormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
