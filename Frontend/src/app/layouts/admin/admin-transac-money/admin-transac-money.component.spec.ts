import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransacMoneyComponent } from './admin-transac-money.component';

describe('AdminTransacMoneyComponent', () => {
  let component: AdminTransacMoneyComponent;
  let fixture: ComponentFixture<AdminTransacMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTransacMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTransacMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
