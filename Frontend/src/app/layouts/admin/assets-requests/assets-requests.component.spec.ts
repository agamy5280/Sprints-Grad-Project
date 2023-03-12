import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsRequestsComponent } from './assets-requests.component';

describe('AssetsRequestsComponent', () => {
  let component: AssetsRequestsComponent;
  let fixture: ComponentFixture<AssetsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
