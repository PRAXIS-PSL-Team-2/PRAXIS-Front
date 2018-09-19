import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRTCComponent } from './record-rtc.component';

describe('RecordRtcComponent', () => {
  let component: RecordRTCComponent;
  let fixture: ComponentFixture<RecordRTCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordRTCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordRTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
