import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';
import { DrAptData } from '../../models/drapt.model';
import { DraptService } from '../../services/drapt.service';

@Component({
  selector: 'app-dr-appointments',
  templateUrl: './dr-appointments.component.html',
  styleUrls: ['./dr-appointments.component.scss'],
})
export class DrAppointmentsComponent implements OnInit {
  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;
  panelOpenState = true;
  drapts$!: Observable<DrAptData[]>;  

  constructor(
    private bpoService: BpObserverService,
    private _drAptService: DraptService
    ) {}
    
    ngOnInit() {
    }
    
    ngAfterViewInit(): void {
      this.reloadDrApts();
    }
    
    reloadDrApts() {
    this.drapts$ = this._drAptService.getAllDrApts();
  }
}
