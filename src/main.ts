import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { ApplicationStatusComponent } from './app/application-status/application-status.component';
import { ServiceBusComponent } from './app/service-bus/service-bus.component';
import { PublisherInsightsComponent } from './app/publisher-insights/publisher-insights.component';
import { SubscriberInsightsComponent } from './app/subscriber-insights/subscriber-insights.component';
//import {DataService} from './app/services/data.service'
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

