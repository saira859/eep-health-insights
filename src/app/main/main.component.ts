import { Component } from '@angular/core';
import { PublisherInsightsComponent } from "../publisher-insights/publisher-insights.component";
import { SubscriberInsightsComponent } from "../subscriber-insights/subscriber-insights.component";
import { TopWidgetsComponent} from "../top-widgets/top-widgets.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopWidgetsComponent, PublisherInsightsComponent, SubscriberInsightsComponent, HttpClientModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
