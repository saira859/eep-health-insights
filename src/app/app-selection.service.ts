import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSelectionService {
  private selectedAppSubject = new BehaviorSubject<{ name: string } | null>(null);

  selectedApp$: Observable<{ name: string } | null> = this.selectedAppSubject.asObservable();

  selectApp(app: {name: string}) {
    this.selectedAppSubject.next(app);
  }
  
}
