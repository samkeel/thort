import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs/internal/Observable';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';
import { SideNavServiceService } from 'src/app/shared/services/side-nav-service.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  
  isHandset$: Observable<boolean> = this.bpoService.Handset$;
  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;
  isUserLoggedIn$: Observable<boolean> = this.user.isLoggedIn$;

  constructor(
    private bpoService: BpObserverService,
    private sideNavService: SideNavServiceService,
    public user: UserService
  ) {}

  ngAfterViewInit(): void {
    this.sideNavService.setSideNav(this.sidenav);
  }

}
