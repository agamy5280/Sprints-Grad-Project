import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransacAssetsComponent } from './admin-transac-assets.component';

describe('AdminTransacAssetsComponent', () => {
  let component: AdminTransacAssetsComponent;
  let fixture: ComponentFixture<AdminTransacAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTransacAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTransacAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
