import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { AppSelectionService } from '../app-selection.service';

interface SubscriberData{
  eventsSubscribed: string[];
  deliveredTime: string[];
  expectedRoles: string[];
  serviceBus: string[];
  activeMessages: string[];
}

interface SubscriberDataMap{
  [key: string]: SubscriberData;
}

@Component({
  selector: 'app-subscriber-insights',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './subscriber-insights.component.html',
  styleUrls: ['./subscriber-insights.component.css']
})


export class SubscriberInsightsComponent {
  eventsSubscribed: string[]=[];
  deliveredTime: string[]=[];
  expectedRoles: string[]=[];
  serviceBus: string[]=[];
  activeMessages: string[]=[];

private subscriberDataMap: SubscriberDataMap = {

  'OCAP': {
        eventsSubscribed: ['EventA', 'EventB'],
        deliveredTime: ['2024-08-01 10:00:00', '2024-08-02 11:30:00'],
        expectedRoles: ['Azure ServiceBus Sender'],
        serviceBus: ['02T', '03T'],
        activeMessages: ['190', '130']
    },
    'ZTP': {
        eventsSubscribed: ['EventD', 'EventE'],
        deliveredTime: ['2024-08-04 09:00:00', '2024-08-05 10:30:00'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        serviceBus: ['01T'],
        activeMessages: ['100']
    },
    'WONC': {
        eventsSubscribed: ['EventF', 'EventG', 'EventH'],
        deliveredTime: ['2024-08-06 14:00:00', '2024-08-07 15:30:00', '2024-08-08 16:45:00'],
        expectedRoles: ['Azure ServiceBus Sender', 'Azure ServiceBus Receiver'],
        serviceBus: ['05T'],
        activeMessages: ['150', '70']
    },
    'WOL': {
        eventsSubscribed: ['EventI', 'EventJ'],
        deliveredTime: ['2024-08-09 08:30:00', '2024-08-10 09:00:00'],
        expectedRoles: ['Azure ServiceBus Sender'],
        serviceBus: ['06T', '07T'],
        activeMessages: ['80', '60', '20']
    },
    'WC': {
        eventsSubscribed: ['EventL', 'EventM'],
        deliveredTime: ['2024-08-12 13:00:00', '2024-08-13 14:30:00'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        serviceBus: ['08T'],
        activeMessages: ['110']
    },
    'VTS': {
        eventsSubscribed: ['EventN', 'EventO'],
        deliveredTime: ['2024-08-14 15:00:00', '2024-08-15 16:30:00'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        serviceBus: ['09T', '10T'],
        activeMessages: ['200', '140']
    },
    'VTA': {
        eventsSubscribed: [],
        deliveredTime: [],
        expectedRoles: [],
        serviceBus: [],
        activeMessages: []
    },
    'TXO': {
        eventsSubscribed: ['EventP', 'EventQ'],
        deliveredTime: ['2024-08-16 08:00:00', '2024-08-17 09:15:00'],
        expectedRoles: ['Azure ServiceBus Sender'],
        serviceBus: ['11T'],
        activeMessages: ['90']
    },
    'TRS': {
        eventsSubscribed: ['EventR'],
        deliveredTime: ['2024-08-18 10:00:00'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        serviceBus: ['12T', '13T'],
        activeMessages: ['70', '40']
    },
    'TRO': {
        eventsSubscribed: ['EventS', 'EventT'],
        deliveredTime: ['2024-08-19 11:30:00', '2024-08-20 12:45:00'],
        expectedRoles: ['Azure ServiceBus Sender', 'Azure ServiceBus Receiver'],
        serviceBus: ['14T'],
        activeMessages: ['120']
    },
    'TIS': {
        eventsSubscribed: ['EventU', 'EventV'],
        deliveredTime: ['2024-08-21 13:00:00', '2024-08-22 14:30:00'],
        expectedRoles: ['Azure ServiceBus Sender'],
        serviceBus: ['15T'],
        activeMessages: ['100', '50']
    },
    'FSD': {
        eventsSubscribed: [],
        deliveredTime: [],
        expectedRoles: [],
        serviceBus: [],
        activeMessages: []
    },
    'RWU': {
        eventsSubscribed: ['EventW', 'EventX'],
        deliveredTime: ['2024-08-23 15:00:00', '2024-08-24 16:30:00'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        serviceBus: ['16T', '17T'],
        activeMessages: ['130']
    },
    'CRP': {
        eventsSubscribed: ['EventY'],
        deliveredTime: ['2024-08-25 17:00:00'],
        expectedRoles: ['Azure ServiceBus Sender'],
        serviceBus: ['18T'],
        activeMessages: ['140']
    },
    'ZTS': {
        eventsSubscribed: ['EventZ'],
        deliveredTime: ['2024-08-26 18:00:00'],
        expectedRoles: ['Azure ServiceBus Sender', 'Azure ServiceBus Receiver'],
        serviceBus: ['19T', '20T'],
        activeMessages: ['160', '110']
    },
    'IDM': {
        eventsSubscribed: ['EventAA', 'EventAB'],
        deliveredTime: ['2024-08-27 19:00:00', '2024-08-28 20:30:00'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        serviceBus: ['21T'],
        activeMessages: ['75']
    },
    'FSO': {
        eventsSubscribed: ['EventAC'],
        deliveredTime: ['2024-08-29 21:00:00'],
        expectedRoles: ['Azure ServiceBus Sender'],
        serviceBus: ['22T'],
        activeMessages: ['180']
    },
    'FIN': {
        eventsSubscribed: ['EventAD', 'EventAE'],
        deliveredTime: ['2024-08-30 22:00:00', '2024-08-31 23:30:00'],
        expectedRoles: ['Azure ServiceBus Sender'],
        serviceBus: ['23T', '24T'],
        activeMessages: ['190', '120']
    },
    'ESS': {
        eventsSubscribed: ['EventAF'],
        deliveredTime: ['2024-09-01 10:00:00'],
        expectedRoles: ['Azure ServiceBus Receiver'],
        serviceBus: ['25T'],
        activeMessages: ['150']
    },
    'EFL': {
        eventsSubscribed: ['EventAG'],
        deliveredTime: ['2024-09-02 11:30:00'],
        expectedRoles: ['Azure ServiceBus Sender'],
        serviceBus: ['26T'],
        activeMessages: ['200', '170']
    },
    'EFA': {
        eventsSubscribed: [],
        deliveredTime: [],
        expectedRoles: [],
        serviceBus: [],
        activeMessages: []
    },
    'SLTPA': {
        eventsSubscribed: ['EventAH', 'EventAI'],
        deliveredTime: ['2024-09-03 12:00:00', '2024-09-04 13:30:00'],
        expectedRoles: ['Azure ServiceBus Sender', 'Azure ServiceBus Receiver'],
        serviceBus: ['27T', '28T'],
        activeMessages: ['80', '30']
    },
    'SPR': {
        eventsSubscribed: [],
        deliveredTime: [],
        expectedRoles: [],
        serviceBus: [],
        activeMessages: []
    },
}


constructor(private appSelectionService: AppSelectionService){
  this.appSelectionService.selectedApp$.subscribe((application) => {
    if (application) {
      this.updateData(application.name);
    }
  });
}
private updateData(appName: string): void {
  const data = this.subscriberDataMap[appName] || {
    eventsSubscribed: [],
    deliveredTime: [],
    expectedRoles: [],
    serviceBus: [],
    activeMessages: []
  };

  this.eventsSubscribed = data.eventsSubscribed;
    this.deliveredTime = data.deliveredTime;
    this.expectedRoles = data.expectedRoles;
    this.serviceBus = data.serviceBus;
    this.activeMessages = data.activeMessages;
  }
}