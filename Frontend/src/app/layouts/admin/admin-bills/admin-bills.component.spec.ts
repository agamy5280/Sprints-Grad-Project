import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBillsComponent } from './admin-bills.component';

describe('AdminBillsComponent', () => {
  let component: AdminBillsComponent;
  let fixture: ComponentFixture<AdminBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
