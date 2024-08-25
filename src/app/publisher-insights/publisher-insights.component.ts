import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { AppSelectionService } from '../app-selection.service';
//import { Subscription } from 'rxjs';
//import { Observable } from 'rxjs';

interface PublisherData{
  eventsProduced: string[];
  receivedTimes: string[];
  expectedRoles: string[];
  publisherToken: string[];
}

interface PublisherDataMap{
  [key: string]: PublisherData;
} 


@Component({
  selector: 'app-publisher-insights',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './publisher-insights.component.html',
  styleUrls: ['./publisher-insights.component.css']
})


export class PublisherInsightsComponent{
  eventsProduced: string[] = [];
  receivedTimes: string[] = [];
  expectedRoles: string[] = [];
  publisherToken: string[] = [];
  /*applications = [
    { name: 'OCAP', status: 'active'},
    { name: 'ZTP', status: 'active'},
    { name: 'WONC', status: 'active'},
    { name: 'WOL', status: 'active'},
    { name: 'WC', status: 'active'},
    { name: 'VTS', status: 'active'},
    { name: 'VTA', status: 'inactive'},
    { name: 'TXO', status: 'active'},
    { name: 'TRS', status: 'active'},
    { name: 'TRO', status: 'pending'},
    { name: 'TIS', status: 'active'},
    { name: 'FSD', status: 'inactive'},
    { name: 'RWU', status: 'active'},
    { name: 'CRP', status: 'active'},
    { name: 'ZTS', status: 'active'},
    { name: 'IDM', status: 'pending'},
    { name: 'FSO', status: 'active'},
    { name: 'FIN', status: 'active'},
    { name: 'ESS', status: 'active'},
    { name: 'EFL', status: 'active'},
    { name: 'EFA', status: 'inactive'},
    { name: 'SLTPA', status: 'active'},
    { name: 'SPR', status: 'inactive'},
  ]; */
  private publisherDataMap: PublisherDataMap = {
    
      'OCAP': {
        eventsProduced: ['TaxReturnCreated', 'TaxReturnOpened'],
        receivedTimes: ['2024-03-19 07:17:46', '2024-03-20 07:17:46'],
        expectedRoles: ['Azure ServiceBus Sender', 'Azure ServiceBus Receiver'],
        publisherToken: ['83aa5bdd-ca74-4e47-9ef1-4dd1f251e610']
    },
    'ZTP': {
        eventsProduced: ['InvoiceGenerated', 'PaymentProcessed'],
        receivedTimes: ['2024-04-10 08:25:30', '2024-04-11 09:15:20'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['a0b8c1d2-3e4f-5678-9101-112131415161']
    },
    'WONC': {
        eventsProduced: ['OrderPlaced', 'OrderShipped'],
        receivedTimes: ['2024-05-01 10:30:15', '2024-05-02 11:45:25'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['2b3c4d5e-6f7g-8910-11h1-213141516171']
    },
    'WOL': {
        eventsProduced: ['UserLoggedIn', 'UserLoggedOut'],
        receivedTimes: ['2024-06-07 12:40:50', '2024-06-08 13:55:10'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['3c4d5e6f-7g8h-9101-11j1-415161718192']
    },
    'WC': {
        eventsProduced: ['ContentUploaded', 'ContentReviewed'],
        receivedTimes: ['2024-07-14 14:05:35', '2024-07-15 15:20:45'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['4d5e6f7g-8h9i-1011-12k1-617181920213']
    },
    'VTS': {
        eventsProduced: ['VideoStreamStarted', 'VideoStreamEnded'],
        receivedTimes: ['2024-08-21 16:15:20', '2024-08-22 17:30:30'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['5e6f7g8h-9i10-1112-13l1-819202122232']
    },
    'VTA': {
        eventsProduced: ['TransactionInitiated', 'TransactionCompleted'],
        receivedTimes: ['2024-09-28 18:25:05', '2024-09-29 19:40:15'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['6f7g8h9i-1011-1213-14m1-102122232425']
    },
    'TXO': {
        eventsProduced: ['TicketOpened', 'TicketClosed'],
        receivedTimes: ['2024-10-03 20:35:50', '2024-10-04 21:50:00'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['7g8h9i10-1112-1314-15n1-122324252627']
    },
    'TRS': {
        eventsProduced: ['ReservationMade', 'ReservationCancelled'],
        receivedTimes: ['2024-11-09 22:45:35', '2024-11-10 23:00:45'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['8h9i1011-1213-1415-16o1-142526272829']
    },
    'TRO': {
        eventsProduced: ['RoutePlanned', 'RouteExecuted'],
        receivedTimes: ['2024-12-15 00:55:20', '2024-12-16 01:10:30'],
        expectedRoles: ['Azure ServiceBus Sender', 'Azure ServiceBus Receiver'],
        publisherToken: ['9i101112-1314-1516-17p1-162728293031']
    },
    'TIS': {
        eventsProduced: ['InspectionScheduled', 'InspectionCompleted'],
        receivedTimes: ['2025-01-21 02:05:05', '2025-01-22 03:20:15'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['10111213-1415-1617-18q1-182930313233']
    },
    'FSD': {
        eventsProduced: ['FileUploaded', 'FileDownloaded'],
        receivedTimes: ['2025-02-27 04:15:50', '2025-02-28 05:30:00'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['11121314-1516-1718-19r1-203132333435']
    },
    'RWU': {
        eventsProduced: ['ReportGenerated', 'ReportReviewed'],
        receivedTimes: ['2025-03-05 06:25:35', '2025-03-06 07:40:45'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['12131415-1617-1819-20s1-223334353637']
    },
    'CRP': {
        eventsProduced: ['ProfileCreated', 'ProfileUpdated'],
        receivedTimes: ['2025-04-11 08:35:20', '2025-04-12 09:50:30'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['13141516-1718-1920-21t1-243536373839']
    },
    'ZTS': {
        eventsProduced: ['TaskStarted', 'TaskCompleted'],
        receivedTimes: ['2025-05-17 10:45:05', '2025-05-18 11:00:15'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['14151617-1819-2021-22u1-263738394041']
    },
    'MB': {
        eventsProduced: ['MessageSent', 'MessageReceived'],
        receivedTimes: ['2025-06-23 12:55:50', '2025-06-24 13:10:00'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['15161718-1920-2122-23v1-283940414243']
    },
    'IDM': {
        eventsProduced: ['IdentityVerified', 'IdentityUpdated'],
        receivedTimes: ['2025-07-29 14:05:35', '2025-07-30 15:20:45'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['16171819-2021-2223-24w1-304142434445']
    },
    'FSO': {
        eventsProduced: ['ServiceStarted', 'ServiceStopped'],
        receivedTimes: ['2025-08-04 16:15:20', '2025-08-05 17:30:30'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['17181920-2122-2324-25x1-324344454647']
    },
    'FIN': {
        eventsProduced: ['TransactionProcessed', 'StatementGenerated'],
        receivedTimes: ['2025-09-10 18:25:05', '2025-09-11 19:40:15'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['18192021-2223-2425-26y1-344546474849']
    },
    'ESS': {
        eventsProduced: ['SessionStarted', 'SessionEnded'],
        receivedTimes: ['2025-10-16 20:35:50', '2025-10-17 21:50:00'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['19202122-2324-2526-27z1-364748495051']
    },
    'EFL': {
        eventsProduced: ['FileEncrypted', 'FileDecrypted'],
        receivedTimes: ['2025-11-22 22:45:35', '2025-11-23 23:00:45'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['20212223-2425-2627-28a2-384950515253']
    },
    'EFA': {
        eventsProduced: ['AccessGranted', 'AccessRevoked'],
        receivedTimes: ['2025-12-28 00:55:20', '2025-12-29 01:10:30'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['21222324-2526-2728-29b2-405152535455']
    },
    'SLTPA': {
        eventsProduced: ['LoanApproved', 'LoanDisbursed'],
        receivedTimes: ['2026-01-03 02:05:05', '2026-01-04 03:20:15'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['22232425-2627-2829-30c2-425354555657']
    },
    'DOR': {
        eventsProduced: ['DocumentUploaded', 'DocumentReviewed'],
        receivedTimes: ['2026-02-09 04:15:50', '2026-02-10 05:30:00'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['23242526-2728-2930-31d2-445556575859']
    },
    'DAAS': {
        eventsProduced: ['ServiceRequested', 'ServiceDelivered'],
        receivedTimes: ['2026-03-15 06:25:35', '2026-03-16 07:40:45'],
        expectedRoles: ['Azure ServiceBus Sender'],
        publisherToken: ['24252627-2829-3031-32e2-465758596061']
    },
    'CRS': {
        eventsProduced: ['ReviewStarted', 'ReviewCompleted'],
        receivedTimes: ['2026-04-21 08:35:20', '2026-04-22 09:50:30'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        publisherToken: ['25262728-2930-3132-33f2-485960616263']
    },
    }



    
//  private subscription: Subscription = new Subscription();


 // selectedApp: appData |null=null;


//selectedApplication: Application | null = null;




constructor(private appSelectionService: AppSelectionService) {
  this.appSelectionService.selectedApp$.subscribe((application) => {
    if (application) {  // Add null check here
      this.updateData(application.name);
  }
});
}

private updateData(appName: string): void {
  const data = this.publisherDataMap[appName] || {
    eventsProduced: [],
    receivedTimes: [],
    expectedRoles: [],
    publisherToken: [],
  };

  this.eventsProduced = data.eventsProduced;
    this.receivedTimes = data.receivedTimes;
    this.expectedRoles = data.expectedRoles;
    this.publisherToken = data.publisherToken;
  }
}
/*ngOnInit() {
  this.subscription.add(
    this.appSelectionService.selectedApp$.subscribe(app => {
      if (app) {
        const data = this.appDataMap[app.name] || { events: [], receivedTimes: [], roles: [], token: [] };
        this.events = data.events;
        this.receivedTimes = data.receivedTimes;
        this.roles = data.roles;
        this.token = data.token;
      }
    })
  );
}
ngOnDestroy() {
  this.subscription.unsubscribe();
}
}

onSelectApplication(application: { name: string }): void {
 this.appSelectionService.selectApp(application);
 console.log('Selected application:', application);
 const data = this.appDataMap[application.name] || { events: [], receivedTimes: [], roles: [], token: []};
 console.log('Data:', data);

 this.events = data.events;
 this.receivedTimes = data.receivedTimes;
this.roles=data.roles;
this.token=data.token;
     
    ;
  }
} */

