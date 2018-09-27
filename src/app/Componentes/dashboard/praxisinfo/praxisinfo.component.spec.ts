import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraxisinfoComponent } from './praxisinfo.component';

describe('PraxisinfoComponent', () => {
  let component: PraxisinfoComponent;
  let fixture: ComponentFixture<PraxisinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraxisinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraxisinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
