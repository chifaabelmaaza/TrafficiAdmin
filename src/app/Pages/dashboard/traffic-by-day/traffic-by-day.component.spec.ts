import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficByDayComponent } from './traffic-by-day.component';

describe('TrafficByDayComponent', () => {
  let component: TrafficByDayComponent;
  let fixture: ComponentFixture<TrafficByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrafficByDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
