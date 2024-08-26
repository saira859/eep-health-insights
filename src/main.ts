import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { PublisherInsightsComponent } from './app/publisher-insights/publisher-insights.component';
import { SubscriberInsightsComponent } from './app/subscriber-insights/subscriber-insights.component';
//import {DataService} from './app/services/data.service'
import { HttpClientModule } from '@angular/common/http';

//const routes = [
 // {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
//];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

