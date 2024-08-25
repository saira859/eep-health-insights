import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { AppSelectionService } from '../app-selection.service';

interface mockData {
  serviceBus: string[];
  activeMessages: string[];
}
interface mockdataMap {
  [key: string]: mockData;
}


@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [NgFor, CommonModule,],
  templateUrl: './top-widgets.component.html',
  styleUrls: [ './top-widgets.component.css']
})
export class TopWidgetsComponent {
  applications = [
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
  ];

private mockdataMap: mockdataMap = {
  'OCAP': { serviceBus: ['02T', '03T'], activeMessages: ['190', '130'] },
  'ZTP': { serviceBus: ['01T'], activeMessages: ['100'] },
    'WONC': { serviceBus: ['05T'], activeMessages: ['150', '70'] },
    'WOL': { serviceBus: ['06T', '07T'], activeMessages: ['80', '60', '20'] },
    'WC': { serviceBus: ['08T'], activeMessages: ['110'] },
    'VTS': { serviceBus: ['09T', '10T'], activeMessages: ['200', '140'] },
    'VTA': { serviceBus: [], activeMessages: [] }, // Example for inactive status
    'TXO': { serviceBus: ['11T'], activeMessages: ['90'] },
    'TRS': { serviceBus: ['12T', '13T'], activeMessages: ['70', '40'] },
    'TRO': { serviceBus: ['14T'], activeMessages: ['120'] },
    'TIS': { serviceBus: ['15T'], activeMessages: ['100', '50'] },
    'FSD': { serviceBus: [], activeMessages: [] }, // Example for inactive status
    'RWU': { serviceBus: ['16T', '17T'], activeMessages: ['130'] },
    'CRP': { serviceBus: ['18T'], activeMessages: ['140'] },
    'ZTS': { serviceBus: ['19T', '20T'], activeMessages: ['160', '110'] },
    'IDM': { serviceBus: ['21T'], activeMessages: ['75'] },
    'FSO': { serviceBus: ['22T'], activeMessages: ['180'] },
    'FIN': { serviceBus: ['23T', '24T'], activeMessages: ['190', '120'] },
    'ESS': { serviceBus: ['25T'], activeMessages: ['150'] },
    'EFL': { serviceBus: ['26T'], activeMessages: ['200', '170'] },
    'EFA': { serviceBus: [], activeMessages: [] }, // Example for inactive status
    'SLTPA': { serviceBus: ['27T', '28T'], activeMessages: ['80', '30'] },
    'SPR': { serviceBus: [], activeMessages: [] }
}

  serviceBus: string[] = [];
  activeMessages: string[] = [];


constructor(private appSelectionService: AppSelectionService) {}

onSelectApplication(application: { name: string }): void {
  this.appSelectionService.selectApp(application);
  console.log('Selected application:', application);
  const data = this.mockdataMap[application.name] || { serviceBus: [], activeMessages: [] };
  console.log('Data:', data);

  this.serviceBus = data.serviceBus;
  this.activeMessages = data.activeMessages; 
 

}
}

