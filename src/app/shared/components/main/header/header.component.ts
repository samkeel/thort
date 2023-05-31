import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';
import { SideNavServiceService } from 'src/app/shared/services/side-nav-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  ishandset$: Observable<boolean> = this.bpoService.Handset$;

  constructor(
    private bpoService: BpObserverService,
    private sideNavService: SideNavServiceService
  ) {}

  toggleNav(): void {
    this.sideNavService.toggle();
  }
}
