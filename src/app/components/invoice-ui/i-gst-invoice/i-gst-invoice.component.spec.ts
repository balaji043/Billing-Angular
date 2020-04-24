import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IGstInvoiceComponent } from './i-gst-invoice.component';

describe('IGstInvoiceComponent', () => {
  let component: IGstInvoiceComponent;
  let fixture: ComponentFixture<IGstInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IGstInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IGstInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
