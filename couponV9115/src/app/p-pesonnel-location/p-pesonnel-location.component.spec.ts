import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPesonnelLocationComponent } from './p-pesonnel-location.component';

describe('PPesonnelLocationComponent', () => {
  let component: PPesonnelLocationComponent;
  let fixture: ComponentFixture<PPesonnelLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPesonnelLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPesonnelLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
