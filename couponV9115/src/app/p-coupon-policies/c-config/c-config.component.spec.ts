import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CConfigComponent } from './c-config.component';

describe('CConfigComponent', () => {
  let component: CConfigComponent;
  let fixture: ComponentFixture<CConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
