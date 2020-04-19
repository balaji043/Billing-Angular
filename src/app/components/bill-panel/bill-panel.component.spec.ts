import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPanelComponent } from './bill-panel.component';

describe('BillPanelComponent', () => {
  let component: BillPanelComponent;
  let fixture: ComponentFixture<BillPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
