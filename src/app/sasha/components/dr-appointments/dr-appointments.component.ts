import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';

@Component({
  selector: 'app-dr-appointments',
  templateUrl: './dr-appointments.component.html',
  styleUrls: ['./dr-appointments.component.scss'],
})
export class DrAppointmentsComponent {
  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;
  panelOpenState = true;

  items: any[] = [
    { id: 1, appointmentDate: '01/07/2023', details: 'do something' },
    { id: 2, appointmentDate: '02/07/2023', details: 'do something' },
    { id: 3, appointmentDate: '03/07/2023', details: 'do something' },
    { id: 4, appointmentDate: '15/07/2023', details: 'do something' },
    { id: 5, appointmentDate: '16/07/2023', details: 'do something' },
    { id: 6, appointmentDate: '17/07/2023', details: 'do something' },
  ];

  constructor(private bpoService: BpObserverService) {}
}
