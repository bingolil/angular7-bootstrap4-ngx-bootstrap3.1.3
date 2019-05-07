import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaAutosizeComponent } from './textarea-autosize.component';

describe('TextareaAutosizeComponent', () => {
  let component: TextareaAutosizeComponent;
  let fixture: ComponentFixture<TextareaAutosizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaAutosizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaAutosizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
