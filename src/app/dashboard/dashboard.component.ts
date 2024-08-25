import { Component } from '@angular/core';
import { ApplicationStatusComponent } from "../application-status/application-status.component";
import { ServiceBusComponent } from "../service-bus/service-bus.component";
import { PublisherInsightsComponent } from "../publisher-insights/publisher-insights.component";
import { SubscriberInsightsComponent } from "../subscriber-insights/subscriber-insights.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ApplicationStatusComponent, ServiceBusComponent, PublisherInsightsComponent, SubscriberInsightsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
