import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private snackbarService: SnackbarService) { }

  ngOnInit(): void {
  }

  clickDelete(): void {
    this.snackbarService.openSnackBar('Delete', '')
  }

}
