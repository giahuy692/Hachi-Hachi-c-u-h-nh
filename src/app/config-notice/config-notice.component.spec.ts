import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNoticeComponent } from './config-notice.component';

describe('ConfigNoticeComponent', () => {
  let component: ConfigNoticeComponent;
  let fixture: ComponentFixture<ConfigNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
