import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDescComponent } from './table-desc.component';

describe('TableDescComponent', () => {
  let component: TableDescComponent;
  let fixture: ComponentFixture<TableDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
