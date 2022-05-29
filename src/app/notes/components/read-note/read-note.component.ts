import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-read-note',
  templateUrl: './read-note.component.html',
  styleUrls: ['./read-note.component.scss'],
})
export class ReadNoteComponent implements OnInit {
  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  backClick() {
    this.navigationService.back();
  }

  editClick() {
    this.router.navigate(['notes/edit']);
  }
}
