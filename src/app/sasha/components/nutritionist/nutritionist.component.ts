import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';

@Component({
  selector: 'app-nutritionist',
  templateUrl: './nutritionist.component.html',
  styleUrls: ['./nutritionist.component.scss']
})
export class NutritionistComponent {
  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;

  constructor(
    private bpoService: BpObserverService,
  ) {}

}
