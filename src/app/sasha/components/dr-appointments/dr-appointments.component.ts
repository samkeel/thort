import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';

@Component({
  selector: 'app-dr-appointments',
  templateUrl: './dr-appointments.component.html',
  styleUrls: ['./dr-appointments.component.scss']
})
export class DrAppointmentsComponent {
  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;

  constructor(
    private bpoService: BpObserverService,
  ) {}

}
