import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonGstInvoiceComponent } from './non-gst-invoice.component';

describe('NonGstInvoiceComponent', () => {
  let component: NonGstInvoiceComponent;
  let fixture: ComponentFixture<NonGstInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonGstInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonGstInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
