import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillRegistrationComponent } from './bill-registration.component';

describe('NewBillComponent', () => {
  let component: BillRegistrationComponent;
  let fixture: ComponentFixture<BillRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
