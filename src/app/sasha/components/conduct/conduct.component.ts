import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';
import { ConductData } from '../../models/conduct.model';
import { ConductService } from '../../services/conduct.service';

@Component({
  selector: 'app-conduct',
  templateUrl: './conduct.component.html',
  styleUrls: ['./conduct.component.scss'],
})
export class ConductComponent implements OnInit {
  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;

  conductReasons$!: Observable<ConductData[]>;

  constructor(
    private bpoService: BpObserverService,
    private _conductService: ConductService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.reloadConduct();
  }

  reloadConduct() {
    this.conductReasons$ = this._conductService.getAllConductData();
  }
}
