import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;

  constructor(
    private bpoService: BpObserverService,
  ) {}

}
