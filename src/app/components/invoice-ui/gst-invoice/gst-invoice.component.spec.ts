import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstInvoiceComponent } from './gst-invoice.component';

describe('GstInvoiceComponent', () => {
  let component: GstInvoiceComponent;
  let fixture: ComponentFixture<GstInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
