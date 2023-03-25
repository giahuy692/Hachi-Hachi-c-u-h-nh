import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationCouponComponent } from './infomation-coupon.component';

describe('InfomationCouponComponent', () => {
  let component: InfomationCouponComponent;
  let fixture: ComponentFixture<InfomationCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomationCouponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfomationCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
