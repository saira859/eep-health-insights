import { Component } from '@angular/core';

interface App{
  name: string;
  status: string;
}
@Component({
  selector: 'app-application-status',
  standalone: true,
  imports: [],
  templateUrl: './application-status.component.html',
  styleUrl: './application-status.component.css'
})
export class ApplicationStatusComponent {
application: App[] = [
  {name: 'App1', status: 'active'},
  {name: 'App 2', status: 'inactive'},
  {name: 'App 3', status: 'active'},
  {name: 'App 4', status: 'inactive'}
];
 i: number = 0;
 }
