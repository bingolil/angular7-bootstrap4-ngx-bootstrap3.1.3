import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCheckboxGroupComponent } from './ngx-checkbox-group.component';

describe('NgxCheckboxGroupComponent', () => {
  let component: NgxCheckboxGroupComponent;
  let fixture: ComponentFixture<NgxCheckboxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCheckboxGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
