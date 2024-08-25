import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from "./side-nav/side-nav.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { PublisherInsightsComponent } from './publisher-insights/publisher-insights.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SubscriberInsightsComponent } from './subscriber-insights/subscriber-insights.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent, HeaderComponent, MainComponent, PublisherInsightsComponent, TopWidgetsComponent, SubscriberInsightsComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eep--health-insights';
}
