import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteLoadingComponent } from './route-loading.component';

describe('RouteLoadingComponent', () => {
  let component: RouteLoadingComponent;
  let fixture: ComponentFixture<RouteLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
