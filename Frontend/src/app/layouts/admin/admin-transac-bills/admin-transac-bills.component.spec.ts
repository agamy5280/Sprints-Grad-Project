import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransacBillsComponent } from './admin-transac-bills.component';

describe('AdminTransacBillsComponent', () => {
  let component: AdminTransacBillsComponent;
  let fixture: ComponentFixture<AdminTransacBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTransacBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTransacBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
