import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExtendComponent } from './table-extend.component';

describe('TableExtendComponent', () => {
  let component: TableExtendComponent;
  let fixture: ComponentFixture<TableExtendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExtendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
