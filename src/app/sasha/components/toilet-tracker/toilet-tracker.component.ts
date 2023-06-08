import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';

@Component({
  selector: 'app-toilet-tracker',
  templateUrl: './toilet-tracker.component.html',
  styleUrls: ['./toilet-tracker.component.scss']
})
export class ToiletTrackerComponent {
  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;

  constructor(
    private bpoService: BpObserverService,
  ) {}

}
