import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootSliderComponent } from './boot-slider.component';

describe('BootSliderComponent', () => {
  let component: BootSliderComponent;
  let fixture: ComponentFixture<BootSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
