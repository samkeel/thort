import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BpObserverService {
  Handset$: Observable<boolean> = this._breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((results) => results.matches),
      shareReplay()
    );

  HandsetPortrait$: Observable<boolean> = this._breakpointObserver
    .observe(Breakpoints.HandsetPortrait)
    .pipe(
      map((results) => results.matches),
      shareReplay()
    );

  constructor(private _breakpointObserver: BreakpointObserver) {}
}
