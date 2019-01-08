import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownHoverComponent } from './dropdown-hover.component';

describe('DropdownHoverComponent', () => {
  let component: DropdownHoverComponent;
  let fixture: ComponentFixture<DropdownHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
