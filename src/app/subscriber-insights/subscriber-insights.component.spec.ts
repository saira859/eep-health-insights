import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberInsightsComponent } from './subscriber-insights.component';

describe('SubscriberInsightsComponent', () => {
  let component: SubscriberInsightsComponent;
  let fixture: ComponentFixture<SubscriberInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriberInsightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriberInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
