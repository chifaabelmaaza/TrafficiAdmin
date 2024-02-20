import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficTaxiVsBusComponent } from './traffic-taxi-vs-bus.component';

describe('TrafficTaxiVsBusComponent', () => {
  let component: TrafficTaxiVsBusComponent;
  let fixture: ComponentFixture<TrafficTaxiVsBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrafficTaxiVsBusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficTaxiVsBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
