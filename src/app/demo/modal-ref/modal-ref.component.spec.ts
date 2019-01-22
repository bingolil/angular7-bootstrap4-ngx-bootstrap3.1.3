import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRefComponent } from './modal-ref.component';

describe('ModalRefComponent', () => {
  let component: ModalRefComponent;
  let fixture: ComponentFixture<ModalRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
