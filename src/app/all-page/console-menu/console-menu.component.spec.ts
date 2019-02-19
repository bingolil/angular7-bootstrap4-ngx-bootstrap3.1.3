import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleMenuComponent } from './console-menu.component';

describe('ConsoleMenuComponent', () => {
  let component: ConsoleMenuComponent;
  let fixture: ComponentFixture<ConsoleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
