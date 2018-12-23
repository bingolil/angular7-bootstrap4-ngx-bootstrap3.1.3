import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFooterExtendComponent } from './page-footer-extend.component';

describe('PageFooterExtendComponent', () => {
  let component: PageFooterExtendComponent;
  let fixture: ComponentFixture<PageFooterExtendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFooterExtendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFooterExtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
