import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding } from '@angular/core';
import { routeFadeStateTrigger } from 'src/app/shared/animations/route-animations';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeFadeStateTrigger],
})
export class HomeComponent {
  constructor(
    private responsive: BreakpointObserver,
    public user: UserService
  ) {}
  @HostBinding('@routeFadeState') routeAnimation = true;

  handset = true;
  currentScreenSize: string = '';

  ngOnInit(): void {
    this.responsive
      .observe([
        Breakpoints.Small,
        Breakpoints.Large,
        Breakpoints.HandsetPortrait,
      ])
      .subscribe((result) => {
        this.handset = false;
        const breakpoints = result.breakpoints;
        if (breakpoints[Breakpoints.Small]) {
          this.currentScreenSize = 'Small';
        } else if (breakpoints[Breakpoints.Large]) {
          this.currentScreenSize = 'Large';
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.handset = true;
          this.currentScreenSize = 'Handset Portrait';
        }
      });
  }

  onLogout() {
    this.user.logout();
  }
}
