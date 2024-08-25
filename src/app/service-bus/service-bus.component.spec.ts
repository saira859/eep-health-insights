import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBusComponent } from './service-bus.component';

describe('ServiceBusComponent', () => {
  let component: ServiceBusComponent;
  let fixture: ComponentFixture<ServiceBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceBusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
