import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicableConditionsComponent } from './applicable-conditions.component';

describe('ApplicableConditionsComponent', () => {
  let component: ApplicableConditionsComponent;
  let fixture: ComponentFixture<ApplicableConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicableConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicableConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
