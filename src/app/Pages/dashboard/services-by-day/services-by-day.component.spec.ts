import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesByDayComponent } from './services-by-day.component';

describe('ServicesByDayComponent', () => {
  let component: ServicesByDayComponent;
  let fixture: ComponentFixture<ServicesByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesByDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
