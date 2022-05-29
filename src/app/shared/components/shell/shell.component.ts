import { Component, OnInit, ViewChild } from '@angular/core';
import { BpObserverService } from '../../services/bp-observer.service';
import { SideNavService } from '../../services/side-nav.service';
import { UserService } from '../../services/user.service';
import { MatSidenav } from '@angular/material/sidenav/sidenav';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  ishandset$: Observable<boolean> = this.bpoService.Handset$;

  constructor(
    private bpoService: BpObserverService,
    private sidenavService: SideNavService,
    public user: UserService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
