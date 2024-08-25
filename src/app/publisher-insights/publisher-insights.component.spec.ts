import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherInsightsComponent } from './publisher-insights.component';

describe('PublisherInsightsComponent', () => {
  let component: PublisherInsightsComponent;
  let fixture: ComponentFixture<PublisherInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublisherInsightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublisherInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
