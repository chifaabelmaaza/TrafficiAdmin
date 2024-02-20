import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiRevenuByDayComponent } from './taxi-revenu-by-day.component';

describe('TaxiRevenuByDayComponent', () => {
  let component: TaxiRevenuByDayComponent;
  let fixture: ComponentFixture<TaxiRevenuByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxiRevenuByDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxiRevenuByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
